import Image from "next/image";
import SiteEffects from "./components/SiteEffects";
import SiteNav from "./components/SiteNav";
import LeadForm from "./components/LeadForm";
import WhatsAppButton from "./components/WhatsAppButton";
import { site } from "./site-config";
import draJessica from "../public/assets/dra-jessica.png";
import logo from "../public/assets/logo-footer.png";

const beforeAfter = [
  {
    src: "/assets/antes-depois-1.webp",
    alt: "Antes e depois de harmonização facial (vista frontal)",
  },
  {
    src: "/assets/antes-depois-2.webp",
    alt: "Antes e depois de harmonização facial (perfil 3/4)",
  },
  {
    src: "/assets/antes-depois-3.webp",
    alt: "Antes e depois de rinomodelação (perfil)",
  },
  {
    src: "/assets/antes-depois-4.webp",
    alt: "Antes e depois de rinomodelação (perfil)",
  },
  {
    src: "/assets/antes-depois-5.png",
    alt: "Antes e depois de harmonização facial (perfil)",
  },
  {
    src: "/assets/antes-depois-6.webp",
    alt: "Antes e depois de preenchimento labial",
  },
  {
    src: "/assets/antes-depois-7.webp",
    alt: "Antes e depois de preenchimento labial",
  },
  {
    src: "/assets/antes-depois-8.webp",
    alt: "Antes e depois de toxina botulínica na testa",
  },
  {
    src: "/assets/antes-depois-9.png",
    alt: "Antes e depois de harmonização facial (vista frontal)",
  },
  {
    src: "/assets/botox_homem.webp",
    alt: "Antes e depois de toxina botulínica na testa (paciente masculino)",
  },
];

export default function Home() {
  return (
    <>
      <SiteEffects />

      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <SiteNav />

      <main className="page" id="conteudo">
        {/* HERO */}
        <header className="hero wrap" id="hero" aria-label="Apresentação">
          <div className="hero-left">
            <div className="hero-eyebrow reveal">
              <span className="dot" />
              <span className="eyebrow">
                Harmonização Facial &middot; Endodontia &middot; Belo Horizonte
              </span>
            </div>
            <h1
              className="hero-title reveal reveal-d1"
              aria-label="O tempo preservado com discrição."
            >
              O tempo
              <br />
              <em>preservado</em>
              <br />
              com <span className="accent">discrição</span>.
            </h1>
            <p className="hero-promise reveal reveal-d2">
              Gerenciamento de idade com <em>técnica autoral</em>. Resultado
              natural, com a sofisticação que se constrói na ausência.
            </p>
            <div className="hero-meta reveal reveal-d3">
              <a href="#agendar" className="hero-cta">
                Avaliação Personalizada
                <span className="arr" />
              </a>
              <div className="hero-credentials">
                {site.cro}
                <br />
                Atendimento por agendamento
              </div>
            </div>
          </div>

          <div className="hero-right reveal reveal-d2">
            <div className="hero-frame" />
            <div className="hero-photo">
              <Image
                src="/assets/jessica_prof_sorrindo.jpg"
                alt="Dra. Jéssica Enes, especialista em harmonização facial e endodontia"
                fill
                priority
                sizes="(max-width: 1100px) 90vw, 45vw"
              />
            </div>
            <div className="hero-stamp">
              <div className="stamp-inner">
                Método
                <br />
                autoral
                <span>est. MMXIX</span>
              </div>
            </div>
            <div className="hero-caption" aria-hidden="true">
              Retrato editorial / atelier clínico
            </div>
          </div>
        </header>

        {/* INTRO STRIP */}
        <section className="intro-strip wrap" id="filosofia" aria-label="Filosofia">
          <div className="label">Filosofia</div>
          <div>
            <p className="quote">
              &ldquo;Cada rosto carrega uma história. Minha missão é preservá-la
              com a sofisticação da técnica e o respeito à sua essência.&rdquo;
              <span className="sig">Jéssica Enes</span>
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about wrap" id="sobre" aria-label="A Doutora">
          <div className="about-photo reveal">
            <div className="frame" />
            <Image
              src={draJessica}
              alt="Dra. Jéssica Enes em sua clínica em Belo Horizonte"
              fill
              sizes="(max-width: 1100px) 90vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center 18%" }}
            />
          </div>
          <div className="about-content">
            <div className="eyebrow reveal">A Doutora</div>
            <h2
              className="reveal reveal-d1"
              aria-label="Por trás de cada resultado, uma técnica e uma escuta atenta."
            >
              Por trás de cada
              <br />
              resultado, <em>uma técnica</em>
              <br />e uma escuta atenta.
            </h2>
            <p className="body-lg reveal reveal-d2">
              Sou Jéssica Enes, especialista em Harmonização Facial e
              Endodontia. Há mais de uma década, dedico-me ao{" "}
              <em className="serif">cuidado integrado da face</em>, onde saúde
              bucal, estética e estrutura conversam como uma só linguagem.
            </p>
            <p className="body reveal reveal-d3">
              O melhor procedimento é aquele que ninguém percebe. Atendo um
              número limitado de pacientes para garantir que cada protocolo seja
              desenhado com a atenção que sua história merece.
            </p>
            <div className="about-credentials reveal reveal-d4">
              <div className="cred">
                <div className="num">
                  12<em>+</em>
                </div>
                <div className="lbl">Anos de prática</div>
              </div>
              <div className="cred">
                <div className="num">3</div>
                <div className="lbl">Especializações</div>
              </div>
              <div className="cred">
                <div className="num">
                  800<em>+</em>
                </div>
                <div className="lbl">Pacientes atendidos</div>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className="method" id="metodo" aria-label="Método Enes">
          <div className="wrap">
            <div className="method-head">
              <div>
                <div className="eyebrow reveal">Metodologia exclusiva</div>
                <h2 className="reveal reveal-d1" aria-label="Método Enes.">
                  Método <em>Enes</em>.
                </h2>
              </div>
              <p className="sub reveal reveal-d2">
                Protocolo autoral que integra <em>harmonização facial</em>,
                saúde endodôntica e leitura individual. Não é pacote, é caminho.
              </p>
            </div>

            <div className="pillars">
              <div className="pillar reveal">
                <div className="num">i.</div>
                <h3>
                  Leitura <em>individual</em>
                </h3>
                <p>
                  Análise da arquitetura facial e dos traços que definem sua
                  identidade. Antes da técnica, escuta.
                </p>
              </div>
              <div className="pillar reveal reveal-d1">
                <div className="num">ii.</div>
                <h3>
                  Técnica <em>integrada</em>
                </h3>
                <p>
                  Endodontia e harmonização facial conversam: estrutura, oclusão
                  e tecido tratados como sistema único.
                </p>
              </div>
              <div className="pillar reveal reveal-d2">
                <div className="num">iii.</div>
                <h3>
                  Resultado <em>imperceptível</em>
                </h3>
                <p>
                  Sucesso medido pela ausência de marcas: você parece
                  descansada, saudável. Nunca operada.
                </p>
              </div>
              <div className="pillar reveal reveal-d3">
                <div className="num">iv.</div>
                <h3>
                  Acompanhamento <em>contínuo</em>
                </h3>
                <p>
                  O protocolo se desdobra em estágios. Reavaliações regulares
                  preservam o equilíbrio ao longo dos anos.
                </p>
              </div>
            </div>

            <div className="method-quote">
              <div className="label">Em uma frase</div>
              <div>
                <blockquote>
                  &ldquo;Não trato sintomas isolados. Trato o tempo como um
                  todo, e devolvo ao rosto a versão mais serena de si
                  mesmo.&rdquo;
                </blockquote>
                <div className="cite">Jéssica Enes</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCEDURES */}
        <section className="wrap" id="tratamentos" aria-label="Tratamentos">
          <div className="procedures-head">
            <div>
              <div className="eyebrow reveal">Tratamentos</div>
              <h2
                className="reveal reveal-d1"
                aria-label="Quatro caminhos. Um cuidado integrado."
              >
                Quatro caminhos.
                <br />
                Um <em>cuidado</em> integrado.
              </h2>
            </div>
            <p className="sub reveal reveal-d2">
              Em vez de listar procedimentos, organizo o cuidado por{" "}
              <em className="serif">objetivo</em>. Você escolhe um destino e
              desenhamos o protocolo juntas.
            </p>
          </div>

          <div className="proc-grid">
            <div className="proc reveal">
              <div className="pn">i.</div>
              <svg
                className="proc-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                <circle cx="28" cy="28" r="22" />
                <circle cx="28" cy="28" r="14" />
                <line x1="28" y1="6" x2="28" y2="14" />
                <line x1="28" y1="42" x2="28" y2="50" />
              </svg>
              <h3>Prevenir</h3>
              <div className="pt">o tempo, antes</div>
              <p>
                Para quem deseja envelhecer com graça. Microdoses,
                bioestimuladores e cuidados que retardam, sem disfarçar.
              </p>
              <ul>
                <li>Toxina botulínica preventiva</li>
                <li>Bioestimuladores de colágeno</li>
                <li>Skinbooster e hidratação profunda</li>
              </ul>
            </div>

            <div className="proc reveal reveal-d1">
              <div className="pn">ii.</div>
              <svg
                className="proc-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                <path d="M8 36 Q 28 8, 48 36" />
                <path d="M14 38 Q 28 18, 42 38" />
                <line x1="28" y1="44" x2="28" y2="50" />
              </svg>
              <h3>Rejuvenescer</h3>
              <div className="pt">com elegância</div>
              <p>
                Reverter sinais com naturalidade. Lifting com fios,
                preenchimentos calibrados e bioestimulação dérmica.
              </p>
              <ul>
                <li>Fios de PDO e sustentação</li>
                <li>Preenchimentos volumétricos</li>
                <li>Ultrassom microfocado (HIFU)</li>
              </ul>
            </div>

            <div className="proc reveal reveal-d2">
              <div className="pn">iii.</div>
              <svg
                className="proc-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                <polygon points="28,8 44,28 28,48 12,28" />
                <polygon points="28,18 36,28 28,38 20,28" />
              </svg>
              <h3>Refinar</h3>
              <div className="pt">o que já é seu</div>
              <p>
                Harmonização sutil que respeita seus traços. Mandíbula, mento,
                lábios e perfil dentro da sua proporção.
              </p>
              <ul>
                <li>Harmonização de perfil</li>
                <li>Definição de contorno mandibular</li>
                <li>Lábios em proporção áurea</li>
              </ul>
            </div>

            <div className="proc reveal reveal-d3">
              <div className="pn">iv.</div>
              <svg
                className="proc-icon"
                viewBox="0 0 56 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                <path d="M28 8 C 18 8, 12 18, 12 30 C 12 42, 20 50, 28 50 C 36 50, 44 42, 44 30 C 44 18, 38 8, 28 8 Z" />
                <line x1="28" y1="20" x2="28" y2="42" />
              </svg>
              <h3>Restaurar</h3>
              <div className="pt">a saúde por dentro</div>
              <p>
                Endodontia estética e funcional com microscopia. Base para
                qualquer sorriso harmônico.
              </p>
              <ul>
                <li>Endodontia microscópica</li>
                <li>Retratamentos complexos</li>
                <li>Estética dental integrada</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience" id="experiencia" aria-label="A Experiência">
          <div className="wrap">
            <div className="exp-grid">
              <div className="exp-text">
                <div className="eyebrow reveal">A Experiência</div>
                <h2
                  className="reveal reveal-d1"
                  aria-label="Mais que uma consulta. Um ritual de cuidado."
                >
                  Mais que uma consulta.
                  <br />
                  Um <em>ritual</em> de <span className="script">cuidado</span>.
                </h2>
                <p className="body-lg reveal reveal-d2">
                  A clínica foi desenhada como extensão da sua casa. Luz natural,
                  materiais nobres, silêncio escolhido. Tempo e privacidade são
                  protocolo.
                </p>
                <div className="exp-features reveal reveal-d3">
                  <div className="feat">
                    <div className="ft">
                      <em>Privacidade</em>
                    </div>
                    <div className="fd">
                      Horário exclusivo. Você não cruza com outros pacientes.
                    </div>
                  </div>
                  <div className="feat">
                    <div className="ft">
                      <em>Tempo</em>
                    </div>
                    <div className="fd">
                      Consultas de 90 minutos. Tempo para escutar e respirar.
                    </div>
                  </div>
                  <div className="feat">
                    <div className="ft">
                      <em>Conforto</em>
                    </div>
                    <div className="fd">
                      Estação de hospitalidade com chá e leituras.
                    </div>
                  </div>
                  <div className="feat">
                    <div className="ft">
                      <em>Discrição</em>
                    </div>
                    <div className="fd">
                      Entrada reservada, valet privativo, acompanhamento pós.
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-photo has-photo reveal reveal-d2">
                <Image
                  src="/assets/aplicacao_cliente.jpg"
                  alt="Dra. Jéssica Enes durante um atendimento de harmonização facial"
                  fill
                  sizes="(max-width: 1100px) 90vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="lbl" aria-hidden="true">
                  atendimento / cuidado individual
                </div>
              </div>
            </div>

            <div className="exp-gallery reveal">
              <div className="gi">
                <Image
                  src="/assets/consultorio.webp"
                  alt="Consultório da Dra. Jéssica Enes com cadeira odontológica e microscopia"
                  fill
                  sizes="(max-width: 1100px) 90vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="gi">
                <Image
                  src="/assets/ficha_anamnese.jpg"
                  alt="Ficha de anamnese personalizada da clínica Jéssica Enes"
                  fill
                  sizes="(max-width: 1100px) 90vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="wrap" id="resultados" aria-label="Resultados">
          <div className="results-head">
            <div className="eyebrow reveal">
              Em palavras de quem já passou por aqui
            </div>
            <h2
              className="reveal reveal-d1"
              aria-label="O resultado mais elogiado é o que ninguém percebe."
            >
              O <em>resultado</em> mais elogiado
              <br />é o que ninguém percebe.
            </h2>
            <div className="seal reveal reveal-d2">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "inline-block",
                }}
              />
              Selo · Resultados Naturais
            </div>
          </div>

          <div className="ba-masonry reveal reveal-d2">
            {beforeAfter.map((b) => (
              <figure className="ba-item" key={b.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
          <p className="ba-caption reveal reveal-d3">
            Resultados reais · <em>antes &amp; depois</em>. Imagens publicadas com
            autorização das pacientes.
          </p>

          <div className="testimonials">
            <div className="testi reveal">
              <div className="qm">&rdquo;</div>
              <blockquote>
                Voltei da Europa e três pessoas perguntaram se eu havia
                descansado. Nenhuma percebeu que tinha feito.
              </blockquote>
              <div className="who">
                <div className="ini">M</div>
                <div>
                  <div className="nm">M. L.</div>
                  <div className="rl">Empresária · Lourdes</div>
                </div>
              </div>
            </div>
            <div className="testi reveal reveal-d1">
              <div className="qm">&rdquo;</div>
              <blockquote>
                Pesquisei por mais de um ano. Saí da primeira consulta com a
                sensação rara de ter encontrado a pessoa certa.
              </blockquote>
              <div className="who">
                <div className="ini">C</div>
                <div>
                  <div className="nm">C. A.</div>
                  <div className="rl">Advogada · Savassi</div>
                </div>
              </div>
            </div>
            <div className="testi reveal reveal-d2">
              <div className="qm">&rdquo;</div>
              <blockquote>
                A Jéssica olhou para o meu rosto inteiro, não para uma ruga.
                Esse é o diferencial.
              </blockquote>
              <div className="who">
                <div className="ini">R</div>
                <div>
                  <div className="nm">R. F.</div>
                  <div className="rl">Médica · Belvedere</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / FORM */}
        <section className="cta" id="agendar" aria-label="Agendamento">
          <div className="wrap">
            <div className="cta-grid">
              <div className="cta-left">
                <div className="eyebrow">Agendamento</div>
                <h2
                  className="reveal"
                  aria-label="Sua avaliação personalizada começa aqui."
                >
                  Sua <em>avaliação</em>
                  <br />
                  <span className="script">personalizada</span>
                  <br />
                  começa aqui.
                </h2>
                <p className="reveal reveal-d1">
                  A primeira consulta é uma <em>conversa</em>. Apresento minha
                  leitura, escuto suas inquietações e desenhamos juntos o plano
                  que faz sentido para você.
                </p>
                <div className="note reveal reveal-d2">
                  <span className="dot" />
                  <div>
                    4 novos pacientes por semana, para preservar a
                    personalização.
                  </div>
                </div>
              </div>

              <LeadForm />
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location wrap" id="local" aria-label="Localização">
          <div className="loc-text">
            <div className="eyebrow reveal">Localização</div>
            <h2
              className="reveal reveal-d1"
              aria-label="No coração do Centro-Sul de BH."
            >
              No coração do
              <br />
              <em>Centro-Sul</em> de BH.
            </h2>
            <div className="loc-address reveal reveal-d2">
              {site.address.street}
              <br />
              {site.address.complement}
              <br />
              {site.address.city} · {site.address.region} ·{" "}
              {site.address.postalCode}
            </div>
            <div className="loc-feat reveal reveal-d3">
              <div className="lf">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>{" "}
                Seg. a Sex. · 09h às 19h
              </div>
              <div className="lf">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <rect x="3" y="11" width="18" height="10" rx="1" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>{" "}
                Entrada reservada
              </div>
              <div className="lf">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M3 17h18M5 17V9l4-3h6l4 3v8" />
                  <circle cx="8" cy="17" r="2" />
                  <circle cx="16" cy="17" r="2" />
                </svg>{" "}
                Valet privativo
              </div>
              <div className="lf">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
                </svg>{" "}
                Privacidade absoluta
              </div>
            </div>
            <a
              className="loc-maps-link reveal reveal-d4"
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Google Maps
              <span className="arr" />
            </a>
          </div>

          <div className="map reveal reveal-d2" aria-hidden="true">
            <svg
              viewBox="0 0 500 400"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(26,26,26,0.04)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="500" height="400" fill="#F1ECE3" />
              <rect width="500" height="400" fill="url(#grid)" />
              <path
                d="M0 80 L500 100"
                stroke="rgba(26,26,26,0.12)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 180 L500 200"
                stroke="rgba(26,26,26,0.18)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 280 L500 260"
                stroke="rgba(26,26,26,0.12)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M120 0 L100 400"
                stroke="rgba(26,26,26,0.12)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M260 0 L240 400"
                stroke="rgba(26,26,26,0.18)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M400 0 L380 400"
                stroke="rgba(26,26,26,0.12)"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="380"
                cy="320"
                rx="80"
                ry="50"
                fill="rgba(122,149,144,0.15)"
              />
              <text
                x="380"
                y="324"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize="13"
                fill="#5C7570"
              >
                Praça da Liberdade
              </text>
              <text
                x="60"
                y="50"
                fontFamily="var(--font-sans)"
                fontSize="9"
                letterSpacing="2"
                fill="#6B6660"
              >
                SANTO AGOSTINHO
              </text>
              <text
                x="330"
                y="380"
                fontFamily="var(--font-sans)"
                fontSize="9"
                letterSpacing="2"
                fill="#6B6660"
              >
                LOURDES
              </text>
              <text
                x="14"
                y="174"
                fontFamily="var(--font-sans)"
                fontSize="8"
                letterSpacing="1"
                fill="#6B6660"
              >
                Av. Olegário Maciel
              </text>
              <text
                x="244"
                y="14"
                fontFamily="var(--font-sans)"
                fontSize="8"
                letterSpacing="1"
                fill="#6B6660"
                transform="rotate(89 244 14)"
              >
                R. Santa Catarina
              </text>
            </svg>
            <div className="pin">
              <div className="plbl">Atelier · Dra. Jéssica Enes</div>
              <div className="pring" />
              <div className="pdot" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="wrap">
            <div className="foot-grid">
              <div className="foot-brand">
                <Image
                  src={logo}
                  alt="Dra. Jéssica Enes · Harmonização Facial e Endodontia"
                  width={150}
                  height={150}
                  style={{
                    height: 140,
                    width: "auto",
                    display: "block",
                    marginBottom: 8,
                    marginLeft: -10,
                  }}
                />
                <p>
                  Atelier clínico em Belo Horizonte. Por agendamento, para quem
                  entende que discrição é o novo luxo.
                </p>
              </div>
              <div className="foot-col">
                <h2>Navegar</h2>
                <ul>
                  <li>
                    <a href="#sobre">A Doutora</a>
                  </li>
                  <li>
                    <a href="#metodo">Método Enes</a>
                  </li>
                  <li>
                    <a href="#tratamentos">Tratamentos</a>
                  </li>
                  <li>
                    <a href="#experiencia">A Clínica</a>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h2>Contato</h2>
                <ul>
                  <li>
                    <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.instagramHandle}
                    </a>
                  </li>
                  <li>
                    <a href="#agendar">Agendar Avaliação</a>
                  </li>
                </ul>
              </div>
              <div className="foot-col">
                <h2>Redes</h2>
                <div className="foot-social">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href={site.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <path d="M3 21l1.65-4A8 8 0 1 1 7 18.5L3 21z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="foot-bot">
              <div>
                © MMXXVI · {site.name} · {site.cro}
              </div>
              <div>
                <a href="/politica-de-privacidade">Política de Privacidade</a> ·{" "}
                <a href="/politica-de-privacidade#lgpd">LGPD</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <WhatsAppButton />
    </>
  );
}
