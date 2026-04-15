
require('dotenv').config({ path: '.env.local' });
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testShopify() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  console.log('Testing Shopify connection...');
  console.log('Domain:', domain);
  console.log('Token (length):', token?.length);

  const query = `
    query {
      products(first: 5) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(`https://${domain}/api/2025-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query }),
    });

    console.log('Status:', res.status);
    const json = await res.json();
    console.log('Response JSON:', JSON.stringify(json, null, 2));

    if (json.data?.products?.edges?.length === 0) {
      console.warn('WARNING: API returned 200 but ZERO products. Check token permissions or product published status.');
    }
  } catch (err) {
    console.error('Fetch Error:', err);
  }
}

testShopify();
