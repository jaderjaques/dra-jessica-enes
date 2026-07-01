import { googleAds } from "./site-config";

/**
 * Dispara uma conversão do Google Ads via gtag.
 * No-op seguro se o rótulo estiver vazio ou o gtag ainda não tiver carregado.
 */
export function trackAdsConversion(label: string, value = 1.0) {
  if (!label) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${googleAds.id}/${label}`,
    value,
    currency: "BRL",
  });
}
