import { googleAds } from "./site-config";

type GtagArgs = [string, string, Record<string, unknown>?];

/**
 * Envia para o gtag. Se a tag ainda não carregou, empilha no dataLayer,
 * que o gtag.js consome quando chega (em vez de perder o evento).
 */
function send(...args: GtagArgs) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Conversão do Google Ads. No-op seguro se o rótulo estiver vazio. */
export function trackAdsConversion(label: string, value = 1.0) {
  if (!label) return;
  send("event", "conversion", {
    send_to: `${googleAds.id}/${label}`,
    value,
    currency: "BRL",
  });
}

/**
 * Evento recomendado do GA4 para geração de lead.
 * `method` separa quem veio pelo formulário de quem veio pelo WhatsApp.
 */
export function trackLead(method: "formulario" | "whatsapp") {
  send("event", "generate_lead", {
    method,
    currency: "BRL",
    value: 1.0,
  });
}
