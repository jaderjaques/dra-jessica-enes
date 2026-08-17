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

  // Honeypot: bot preenche, gente não vê. Responde ok para não avisar o bot.
  if (typeof body === "object" && body !== null && "website" in body) {
    const trap = (body as Record<string, unknown>).website;
    if (typeof trap === "string" && trap.trim()) {
      return NextResponse.json({ ok: true });
    }
  }

  if (!isValid(body)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const lead = {
    ...body,
    at: new Date().toISOString(),
    source: "site",
  };

  const webhook = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhook) {
    // Sem webhook configurado o lead ainda aparece no log da função.
    console.warn("[lead] N8N_LEAD_WEBHOOK_URL ausente, lead só no log:", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // Nunca perder o lead em silêncio: registra para recuperação manual.
    console.error("[lead] falha ao entregar no n8n:", err, lead);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
