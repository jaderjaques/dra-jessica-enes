import type { Metadata } from "next";
import { site } from "../site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dra. Jéssica Enes",
  description:
    "Política de privacidade e tratamento de dados pessoais (LGPD) do site da Dra. Jéssica Enes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPrivacidade() {
  return (
    <main className="legal wrap">
      <a href="/" className="legal-back">
        ← Voltar ao site
      </a>

      <h1>Política de Privacidade</h1>
      <p className="legal-sub">Última atualização: junho de 2026</p>

      <p>
        Esta Política de Privacidade descreve como o consultório da{" "}
        <strong>{site.name}</strong> coleta, utiliza e protege os dados pessoais
        fornecidos por você ao navegar neste site e ao solicitar uma avaliação,
        em conformidade com a Lei nº 13.709/2018, a Lei Geral de Proteção de
        Dados (LGPD).
      </p>

      <h2 id="lgpd">1. Dados que coletamos</h2>
      <p>
        Coletamos apenas os dados que você fornece voluntariamente por meio do
        formulário de agendamento:
      </p>
      <ul>
        <li>Nome completo;</li>
        <li>Telefone / WhatsApp;</li>
        <li>E-mail;</li>
        <li>Interesse principal (tipo de tratamento).</li>
      </ul>

      <h2>2. Finalidade do tratamento</h2>
      <p>
        Os dados são utilizados <strong>exclusivamente</strong> para entrar em
        contato e agendar sua avaliação, bem como para responder às suas
        solicitações. Não comercializamos, alugamos ou compartilhamos seus dados
        com terceiros para fins de marketing.
      </p>

      <h2>3. Base legal</h2>
      <p>
        O tratamento dos dados ocorre mediante o seu consentimento (art. 7º, I,
        da LGPD) e para a execução de procedimentos preliminares relacionados ao
        atendimento solicitado.
      </p>

      <h2>4. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger seus dados
        contra acessos não autorizados, perda ou divulgação indevida. Os dados
        são mantidos apenas pelo período necessário ao atendimento ou conforme
        exigido por lei.
      </p>

      <h2>5. Seus direitos</h2>
      <p>
        Você pode, a qualquer momento, solicitar a confirmação, o acesso, a
        correção, a portabilidade ou a exclusão dos seus dados, bem como revogar
        o consentimento, entrando em contato pelo e-mail{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Este site pode utilizar cookies essenciais para o seu funcionamento.
        Cookies de análise ou marketing, quando utilizados, dependem do seu
        consentimento.
      </p>

      <h2>7. Contato do controlador</h2>
      <p>
        {site.name}
        <br />
        {site.address.street}, {site.address.complement}
        <br />
        {site.address.city} · {site.address.region}
        <br />
        E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </main>
  );
}
