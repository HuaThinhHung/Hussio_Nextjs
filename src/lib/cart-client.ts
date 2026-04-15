import type { StoreCart } from '@/types/cart';

const CART_ID_KEY = 'hussio_cart_id';

export function getCartId(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(CART_ID_KEY);
}

export function setCartId(cartId: string) {
  window.localStorage.setItem(CART_ID_KEY, cartId);
}

export async function ensureCart(): Promise<StoreCart> {
  const existing = getCartId();
  if (existing) {
    const res = await fetch(`/api/cart?cartId=${encodeURIComponent(existing)}`, { method: 'GET' });
    const json = (await res.json()) as { cart: StoreCart | null };
    if (json.cart) return json.cart;
  }

  const res = await fetch('/api/cart', { method: 'POST' });
  const json = (await res.json()) as { cart: StoreCart };
  setCartId(json.cart.id);
  return json.cart;
}

export async function addToCart(merchandiseId: string, quantity = 1): Promise<StoreCart> {
  const cart = await ensureCart();
  const res = await fetch('/api/cart/lines/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId: cart.id, merchandiseId, quantity }),
  });
  const json = (await res.json()) as { cart: StoreCart };
  return json.cart;
}

export async function updateLine(lineId: string, quantity: number): Promise<StoreCart> {
  const cartId = getCartId();
  if (!cartId) return ensureCart();
  const res = await fetch('/api/cart/lines/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, lineId, quantity }),
  });
  const json = (await res.json()) as { cart: StoreCart };
  return json.cart;
}

export async function removeLine(lineId: string): Promise<StoreCart> {
  const cartId = getCartId();
  if (!cartId) return ensureCart();
  const res = await fetch('/api/cart/lines/remove', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, lineId }),
  });
  const json = (await res.json()) as { cart: StoreCart };
  return json.cart;
}

