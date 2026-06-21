import { NextRequest, NextResponse } from "next/server";

type Lead = {
  name: string;
  phone: string;
  email: string;
  interest: string;
};

function isValid(data: Partial<Lead>): data is Lead {
  if (!data.name?.trim()) return false;
  if ((data.phone || "").replace(/\D/g, "").length < 10) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) return false;
  if (!data.interest?.trim()) return false;
  return true;
}

export async function POST(req: NextRequest) {
  let body: Partial<Lead>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  // TODO: integrar com CRM / e-mail / WhatsApp Business.
  // Por enquanto registramos o lead no log do servidor.
  console.log("[lead]", {
    ...body,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
