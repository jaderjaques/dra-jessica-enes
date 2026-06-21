/**
 * Dados do negócio em um único lugar.
 * Itens marcados como TODO são placeholders, substituir pelos valores reais
 * antes do go-live.
 */
export const site = {
  name: "Dra. Jéssica Enes",
  // TODO: substituir pela URL de produção (afeta canonical, OG e JSON-LD).
  url: "https://www.jessicaenes.com.br",
  cro: "CRO-MG 44859",
  phoneDisplay: "(31) 98876-1141",
  phoneE164: "+5531988761141",
  whatsapp: "5531988761141",
  email: "contato@jessicaenes.com.br", // TODO: confirmar e-mail
  instagramHandle: "@drajessicaenes",
  social: {
    instagram: "https://www.instagram.com/drajessicaenes/",
    whatsapp: "https://wa.me/5531988761141",
  },
  address: {
    street: "R. Santa Catarina, 813",
    complement: "Santo Agostinho",
    city: "Belo Horizonte",
    region: "MG",
    postalCode: "30170-081",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Santa+Catarina+813+Santo+Agostinho+Belo+Horizonte+MG+30170-081",
  },
  hours: "Seg. a Sex. · 09h às 19h",
} as const;

export const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de agendar uma avaliação com a Dra. Jéssica Enes."
);

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;
