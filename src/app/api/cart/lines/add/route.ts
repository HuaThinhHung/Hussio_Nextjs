import { NextResponse } from 'next/server';
import { cartLinesAdd } from '@/lib/shopify';

export async function POST(req: Request) {
  const body = (await req.json()) as {
    cartId: string;
    merchandiseId: string;
    quantity?: number;
  };

  if (!body?.cartId || !body?.merchandiseId) {
    return NextResponse.json({ error: 'Missing cartId or merchandiseId' }, { status: 400 });
  }

  const cart = await cartLinesAdd(body.cartId, [
    { merchandiseId: body.merchandiseId, quantity: body.quantity ?? 1 },
  ]);

  return NextResponse.json({ cart }, { status: 200 });
}

