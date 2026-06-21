"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logoNav from "../../public/assets/logo-nav.png";

const LINKS = [
  { href: "#sobre", label: "A Doutora" },
  { href: "#metodo", label: "Método" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#experiencia", label: "Clínica" },
  { href: "#agendar", label: "Contato" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body e trata Esc quando o menu está aberto.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav" aria-label="Navegação principal">
      <a href="#hero" className="brand" aria-label="Dra. Jéssica Enes, início">
        <Image
          src={logoNav}
          alt="Dra. Jéssica Enes"
          className="brand-logo"
          priority
        />
      </a>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <a href="#agendar" className="nav-cta">
        Agendar Avaliação
      </a>

      <button
        ref={toggleRef}
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="#agendar"
          className="mobile-menu-cta"
          onClick={() => setOpen(false)}
        >
          Agendar Avaliação
        </a>
      </div>
    </nav>
  );
}
