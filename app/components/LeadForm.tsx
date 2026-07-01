"use client";

import { useState } from "react";
import { site, googleAds } from "../site-config";
import { trackAdsConversion } from "../track";

function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10)
    return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3-$4");
}

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "phone" | "email" | "interest", string>>;

const INTERESTS = [
  "Prevenir (gestão preventiva)",
  "Rejuvenescer (reverter sinais)",
  "Refinar (harmonização sutil)",
  "Restaurar (endodontia estética)",
  "Ainda estou descobrindo",
];

function validate(data: {
  name: string;
  phone: string;
  email: string;
  interest: string;
}): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Informe seu nome.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Telefone inválido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "E-mail inválido.";
  if (!data.interest) errors.interest = "Selecione um caminho.";
  return errors;
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      interest: String(fd.get("interest") || ""),
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Dispara a conversão do Google Ads (lead = formulário enviado).
    trackAdsConversion(googleAds.labels.leadForm);

    // Monta a mensagem e abre o WhatsApp da Dra. Jéssica com os dados.
    const message = [
      "Olá! Gostaria de agendar uma avaliação.",
      "",
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `E-mail: ${data.email}`,
      `Interesse: ${data.interest}`,
    ].join("\n");
    const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    // Aberto na hora (gesto do usuário) para não ser bloqueado pelo navegador.
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Registro best-effort no servidor (não bloqueia o fluxo).
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});

    setStatus("success");
    form.reset();
    setPhone("");
    setTimeout(() => setStatus("idle"), 6000);
  }

  const label =
    status === "success"
      ? "Conversa aberta no WhatsApp ✓"
      : "Agendar pelo WhatsApp";

  return (
    <form className="form reveal reveal-d2" onSubmit={handleSubmit} noValidate>
      <div className="fh">
        Solicitar <em>avaliação</em>
      </div>
      <div className="fs">Retornamos em até 24h por WhatsApp ou telefone.</div>

      <div className="field">
        <label htmlFor="lf-name">Nome completo</label>
        <input
          id="lf-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder="Como prefere ser chamada(o)"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "lf-name-err" : undefined}
        />
        {errors.name && (
          <span className="err" id="lf-name-err">
            {errors.name}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="lf-phone">Telefone (WhatsApp)</label>
        <input
          id="lf-phone"
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          placeholder="(31) 9 0000-0000"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "lf-phone-err" : undefined}
        />
        {errors.phone && (
          <span className="err" id="lf-phone-err">
            {errors.phone}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="lf-email">E-mail</label>
        <input
          id="lf-email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="seu@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "lf-email-err" : undefined}
        />
        {errors.email && (
          <span className="err" id="lf-email-err">
            {errors.email}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="lf-interest">Interesse principal</label>
        <select
          id="lf-interest"
          name="interest"
          defaultValue=""
          required
          aria-invalid={!!errors.interest}
          aria-describedby={errors.interest ? "lf-interest-err" : undefined}
        >
          <option value="">Selecione um caminho</option>
          {INTERESTS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        {errors.interest && (
          <span className="err" id="lf-interest-err">
            {errors.interest}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`form-cta${status === "success" ? " sent" : ""}`}
        disabled={status === "submitting"}
        aria-label="Agendar avaliação pelo WhatsApp"
      >
        <span aria-live="polite">{label}</span>
        <span className="arr" />
      </button>

      <div className="form-foot">
        Seus dados são tratados com sigilo absoluto, usados apenas para retornar
        seu contato. Em conformidade com a{" "}
        <a href="/politica-de-privacidade" className="foot-link">
          Política de Privacidade
        </a>{" "}
        (LGPD).
      </div>
    </form>
  );
}
