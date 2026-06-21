"use client";

import { useEffect } from "react";

/**
 * Comportamentos globais: scroll suave para âncoras (com offset da nav fixa)
 * e revelação ao rolar (IntersectionObserver). O estado "scrolled" da nav e o
 * menu mobile ficam em SiteNav.
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href") || "";
      if (id.length < 2) return;
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
