"use client";

import { useEffect } from "react";
import { googleAds } from "../site-config";
import { trackAdsConversion } from "../track";

/**
 * Comportamentos globais: scroll suave para âncoras (com offset da nav fixa),
 * revelação ao rolar (IntersectionObserver) e rastreio de conversões em cliques
 * de WhatsApp (delegado, cobre qualquer link wa.me do site).
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onClick = (e: Event) => {
      const el = e.target as HTMLElement;

      // Conversão de WhatsApp: qualquer link wa.me (botão flutuante, rodapé...).
      if (el.closest('a[href*="wa.me"]')) {
        trackAdsConversion(googleAds.labels.whatsapp);
      }

      const anchor = el.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href") || "";
      if (id.length < 2) return;

      // Intenção: clique em qualquer botão que leva ao formulário (#agendar).
      if (id === "#agendar") {
        trackAdsConversion(googleAds.labels.agendarClick);
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 60,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
    };
    document.addEventListener("click", onClick);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener("click", onClick);
      io.disconnect();
    };
  }, []);

  return null;
}
