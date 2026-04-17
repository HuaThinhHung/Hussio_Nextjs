import type { StoreProduct } from "@/types/product";
import type {
  StoreProductDetail,
  StoreProductVariant,
} from "@/types/product-detail";
import type { StoreCart } from "@/types/cart";
import { isColorOption } from "./product-utils";

type ShopifyEnv = {
  domain: string;
  token: string;
  apiVersion: string;
};

function getShopifyEnv(): ShopifyEnv {
  const domain =
    process.env.SHOPIFY_STORE_DOMAIN ||
    process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || // fallback for existing local setup (should migrate off)
    "";

  const token =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || // fallback for existing local setup (should migrate off)
    "";

  const apiVersion = process.env.SHOPIFY_API_VERSION || "2025-01";

  if (!domain || !token) {
    throw new Error(
      "Missing Shopify env. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN (server-side).",
    );
  }

  return { domain, token, apiVersion };
}

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  tags?: string[],
): Promise<T> {
  const { domain, token, apiVersion } = getShopifyEnv();
  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const fetchWithRetry = async (retries = 3): Promise<T> => {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token,
        },
        body: JSON.stringify({ query, variables }),
        next: {
          revalidate: 60,
          tags: tags || ["shopify"],
        },
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Shopify fetch failed (${res.status}). ${text}`);
      }

      const json = (await res.json()) as {
        data?: T;
        errors?: Array<{ message: string }>;
      };

      if (json.errors) {
        const errorMsg = json.errors.map((e) => e.message).join(", ");
        throw new Error(`Shopify GraphQL error: ${errorMsg}`);
      }

      if (!json.data) {
        throw new Error("Shopify GraphQL returned no data.");
      }

      return json.data;
    } catch (error) {
      if (retries > 0) {
        console.warn(`[Shopify] Fetch failed, retrying... (${retries} left)`);
        return fetchWithRetry(retries - 1);
      }
      throw error;
    }
  };

  return fetchWithRetry();
}

function toNumber(amount: string | null | undefined): number | undefined {
  if (amount == null) return undefined;
  const n = Number(amount);
  return Number.isFinite(n) ? n : undefined;
}

type ShopifyImageEdge = {
  node: { url: string | null; altText?: string | null } | null;
} | null;
type ShopifyVariantEdge = {
  node: {
    id: string;
    availableForSale: boolean;
    price: { amount: string };
    compareAtPrice?: { amount: string } | null;
    selectedOptions: Array<{ name: string; value: string }>;
  } | null;
} | null;

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  vendor?: string | null;
  productType?: string | null;
  tags?: string[] | null;
  availableForSale?: boolean | null;
  featuredImage?: { url: string | null; altText?: string | null } | null;
  images?: { edges: ShopifyImageEdge[] } | null;
  priceRange?: { minVariantPrice?: { amount?: string | null } | null } | null;
  compareAtPriceRange?: {
    minVariantPrice?: { amount?: string | null } | null;
  } | null;
  variants?: { edges: ShopifyVariantEdge[] } | null;
};

function mapProduct(node: ShopifyProductNode): StoreProduct {
  const images: string[] =
    node.images?.edges
      ?.map((e) => e?.node?.url || undefined)
      .filter((u): u is string => Boolean(u)) ?? [];

  const price =
    toNumber(node.priceRange?.minVariantPrice?.amount ?? undefined) ?? 0;
  // Dùng minVariantPrice để nhất quán với price
  const compareAtPrice = toNumber(
    node.compareAtPriceRange?.minVariantPrice?.amount ?? undefined,
  );

  // Gom màu unique từ TẤT CẢ variants (không chỉ variant đầu tiên)
  const allVariantOptions = (node.variants?.edges || []).flatMap(
    (e) => e?.node?.selectedOptions ?? [],
  );

  const colors = [
    ...new Set(
      allVariantOptions
        .filter((o) => isColorOption(o?.name ?? ""))
        .map((o) => o.value)
        .filter(Boolean),
    ),
  ];

  // availableForSale: true nếu ít nhất 1 variant còn hàng
  const availableForSale =
    node.availableForSale ??
    (node.variants?.edges || []).some(
      (e) => e?.node?.availableForSale === true,
    );

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    productType: node.productType ?? undefined,
    vendor: node.vendor ?? undefined,
    tags: node.tags?.filter(Boolean) ?? [],
    availableForSale,
    price,
    compareAtPrice,
    image: node.featuredImage?.url || images[0],
    hoverImage: images[1] || node.featuredImage?.url || images[0],
    colors: colors.length ? colors : undefined,
    firstVariantId: node.variants?.edges?.[0]?.node?.id,
  };
}

const PRODUCT_CARD_FRAGMENT = /* GraphQL */ `
  fragment ProductCard on Product {
    id
    handle
    title
    vendor
    productType
    tags
    availableForSale
    featuredImage {
      url
      altText
    }
    images(first: 2) {
      edges {
        node {
          url
          altText
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

export async function getProducts(first = 50): Promise<StoreProduct[]> {
  const query = /* GraphQL */ `
    ${PRODUCT_CARD_FRAGMENT}
    query Products($first: Int!) {
      products(first: $first) {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    products: { edges: Array<{ node: ShopifyProductNode }> };
  }>(query, { first });

  return data.products.edges.map((e) => mapProduct(e.node));
}

export async function getProductByHandle(
  handle: string,
): Promise<StoreProduct | null> {
  const query = /* GraphQL */ `
    ${PRODUCT_CARD_FRAGMENT}
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        ...ProductCard
      }
    }
  `;

  const data = await shopifyFetch<{
    productByHandle: ShopifyProductNode | null;
  }>(query, { handle });
  return data.productByHandle ? mapProduct(data.productByHandle) : null;
}

type ShopifyVariantNodeFull = {
  id: string;
  title: string;
  sku?: string | null;
  availableForSale: boolean;
  price?: { amount?: string | null } | null;
  compareAtPrice?: { amount?: string | null } | null;
  selectedOptions: Array<{ name: string; value: string }>;
};

type ShopifyProductDetailNode = {
  id: string;
  handle: string;
  title: string;
  vendor?: string | null;
  productType?: string | null;
  description?: string | null;
  descriptionHtml?: string | null;
  images?: { edges: ShopifyImageEdge[] } | null;
  options?: Array<{ name: string; values: string[] }> | null;
  variants?: { edges: Array<{ node: ShopifyVariantNodeFull } | null> } | null;
  metafield?: { value?: string | null } | null;
};

function mapVariant(v: ShopifyVariantNodeFull): StoreProductVariant {
  const price = toNumber(v.price?.amount ?? undefined) ?? 0;
  const compareAtPrice = toNumber(v.compareAtPrice?.amount ?? undefined);
  return {
    id: v.id,
    title: v.title,
    sku: v.sku || undefined,
    availableForSale: Boolean(v.availableForSale),
    price,
    compareAtPrice,
    selectedOptions: v.selectedOptions || [],
  };
}

export async function getProductDetailByHandle(
  handle: string,
): Promise<StoreProductDetail | null> {
  const query = /* GraphQL */ `
    query ProductDetailByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        handle
        title
        vendor
        productType
        description
        descriptionHtml
        images(first: 20) {
          edges {
            node {
              url
              altText
            }
          }
        }
        options {
          name
          values
        }
        variants(first: 100) {
          edges {
            node {
              id
              title
              sku
              availableForSale
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
        metafield(namespace: "custom", key: "warranty") {
          value
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    productByHandle: ShopifyProductDetailNode | null;
  }>(query, { handle });
  const p = data.productByHandle;
  if (!p) return null;

  const images: string[] =
    p.images?.edges
      ?.map((e) => e?.node?.url || undefined)
      .filter((u): u is string => Boolean(u)) ?? [];

  const variants = (p.variants?.edges || [])
    .map((e) => e?.node)
    .filter((n): n is ShopifyVariantNodeFull => Boolean(n))
    .map(mapVariant);

  return {
    id: p.id,
    handle: p.handle,
    title: p.title,
    vendor: p.vendor ?? undefined,
    productType: p.productType ?? undefined,
    description: p.description ?? undefined,
    descriptionHtml: p.descriptionHtml ?? undefined,
    images,
    options: (p.options || []).map((o) => ({ name: o.name, values: o.values })),
    variants,
    warranty: p.metafield?.value ?? undefined,
  };
}

type ShopifyCartLineEdge = {
  node: {
    id: string;
    quantity: number;
    merchandise: {
      __typename: "ProductVariant";
      id: string;
      title: string;
      image?: { url: string | null } | null;
      price?: { amount?: string | null; currencyCode?: string | null } | null;
      compareAtPrice?: {
        amount?: string | null;
        currencyCode?: string | null;
      } | null;
      selectedOptions: Array<{ name: string; value: string }>;
      product: { title: string; handle: string };
    };
  };
} | null;

type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
  };
  lines: { edges: ShopifyCartLineEdge[] };
};

function mapCart(cart: ShopifyCart): StoreCart {
  const currencyCode = cart.cost.subtotalAmount.currencyCode || "VND";
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity,
    subtotalAmount: toNumber(cart.cost.subtotalAmount.amount) ?? 0,
    currencyCode,
    lines: (cart.lines.edges || [])
      .map((e) => e?.node)
      .filter((node): node is NonNullable<typeof node> => Boolean(node))
      .map((line) => {
        const v = line.merchandise;
        return {
          id: line.id,
          quantity: line.quantity,
          merchandiseId: v.id,
          title: `${v.product.title} — ${v.title}`.replace(
            " — Default Title",
            "",
          ),
          image: v.image?.url || undefined,
          price: toNumber(v.price?.amount ?? undefined) ?? 0,
          compareAtPrice: toNumber(v.compareAtPrice?.amount ?? undefined),
          selectedOptions: v.selectedOptions || [],
        };
      }),
  };
}

const CART_FRAGMENT = /* GraphQL */ `
  fragment CartData on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              image {
                url
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              product {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;

export async function cartCreate(): Promise<StoreCart> {
  const query = /* GraphQL */ `
    ${CART_FRAGMENT}
    mutation CartCreate {
      cartCreate {
        cart {
          ...CartData
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart; userErrors: Array<{ message: string }> };
  }>(query);

  return mapCart(data.cartCreate.cart);
}

export async function cartGet(cartId: string): Promise<StoreCart | null> {
  const query = /* GraphQL */ `
    ${CART_FRAGMENT}
    query Cart($id: ID!) {
      cart(id: $id) {
        ...CartData
      }
    }
  `;

  const data = await shopifyFetch<{ cart: ShopifyCart | null }>(query, {
    id: cartId,
  });
  return data.cart ? mapCart(data.cart) : null;
}

export async function cartLinesAdd(
  cartId: string,
  lines: Array<{ merchandiseId: string; quantity: number }>,
) {
  const query = /* GraphQL */ `
    ${CART_FRAGMENT}
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartData
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCart; userErrors: Array<{ message: string }> };
  }>(query, { cartId, lines });

  return mapCart(data.cartLinesAdd.cart);
}

export async function cartLinesUpdate(
  cartId: string,
  lines: Array<{ id: string; quantity: number }>,
): Promise<StoreCart> {
  const query = /* GraphQL */ `
    ${CART_FRAGMENT}
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...CartData
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesUpdate: {
      cart: ShopifyCart;
      userErrors: Array<{ message: string }>;
    };
  }>(query, { cartId, lines });

  return mapCart(data.cartLinesUpdate.cart);
}

export async function cartLinesRemove(
  cartId: string,
  lineIds: string[],
): Promise<StoreCart> {
  const query = /* GraphQL */ `
    ${CART_FRAGMENT}
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...CartData
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesRemove: {
      cart: ShopifyCart;
      userErrors: Array<{ message: string }>;
    };
  }>(query, { cartId, lineIds });

  return mapCart(data.cartLinesRemove.cart);
}
