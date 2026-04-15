import { NextResponse } from 'next/server';
import { cartLinesRemove } from '@/lib/shopify';

export async function POST(req: Request) {
  const body = (await req.json()) as { cartId: string; lineId: string };

  if (!body?.cartId || !body?.lineId) {
    return NextResponse.json({ error: 'Missing cartId or lineId' }, { status: 400 });
  }

  const cart = await cartLinesRemove(body.cartId, [body.lineId]);
  return NextResponse.json({ cart }, { status: 200 });
}

