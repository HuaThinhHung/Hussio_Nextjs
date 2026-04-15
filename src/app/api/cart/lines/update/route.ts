import { NextResponse } from 'next/server';
import { cartLinesUpdate } from '@/lib/shopify';

export async function POST(req: Request) {
  const body = (await req.json()) as {
    cartId: string;
    lineId: string;
    quantity: number;
  };

  if (!body?.cartId || !body?.lineId || typeof body.quantity !== 'number') {
    return NextResponse.json({ error: 'Missing cartId, lineId, or quantity' }, { status: 400 });
  }

  const cart = await cartLinesUpdate(body.cartId, [{ id: body.lineId, quantity: body.quantity }]);
  return NextResponse.json({ cart }, { status: 200 });
}

