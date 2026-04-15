import { NextResponse } from 'next/server';
import { cartCreate, cartGet } from '@/lib/shopify';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cartId = searchParams.get('cartId');
  if (!cartId) {
    return NextResponse.json({ cart: null }, { status: 200 });
  }

  const cart = await cartGet(cartId);
  return NextResponse.json({ cart }, { status: 200 });
}

export async function POST() {
  const cart = await cartCreate();
  return NextResponse.json({ cart }, { status: 200 });
}

