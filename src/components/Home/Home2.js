import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaLayerGroup,
  FaLinkedinIn,
  FaGithub,
  FaCheckCircle,
  FaGraduationCap,
  FaCertificate,
  FaCopy,
  FaCheck,
  FaArrowRight,
  FaGlobeAmericas,
  FaCode,
  FaTools,
  FaProjectDiagram,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import cvPdf from "../../Assets/Jesus_Adiv_Barroso_CV.pdf";

function Home2() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "jesusadiv1@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <>
      <Container fluid className="home-about-section">
      <Container>
        {/* SECTION 1: VALUE PROPOSITION / SOLUTIONS (#soluciones) */}
        <div id="soluciones" className="pt-4 pb-5">
          <div className="section-header-wrap text-center mb-4">
            <span className="section-eyebrow">
              INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN • VALOR INTEGRAL
            </span>
            <h2 className="section-main-title mt-2">
              Soluciones enfocadas en{" "}
              <span className="text-gradient-brand">Resultados Reales</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "820px" }}>
              Participo en todas las etapas del ciclo de vida del software (SDLC) —desde el análisis técnico y planificación ágil (<strong>Scrum con Jira y Trello</strong>), control de versiones (<strong>Git / GitHub</strong>), arquitectura <strong>Web, Móvil y PWA</strong>, integración de <strong>Inteligencia Artificial (OpenAI, Claude, Gemini, Codex)</strong> y <strong>Ciencia de Datos (SQL / Python)</strong>, hasta el despliegue en <strong>AWS</strong> y el <strong>mantenimiento evolutivo</strong>— entregando productos rápidos, intuitivos y rentables.
            </p>
          </div>

          {/* 5-Stage SDLC Engineering Workflow Bar */}
          <div className="sdlc-workflow-strip p-3 p-md-4 rounded-4 mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 pb-2 border-bottom border-secondary">
              <span className="text-info fw-bold small font-monospace">
                ⚙️ FLUJO DE INGENIERÍA DE EXTREMO A EXTREMO (END-TO-END SDLC)
              </span>
              <span className="text-white-50 small">
                De la idea y los datos hasta producción y soporte continuo
              </span>
            </div>
            <Row className="g-3 text-start">
              <Col lg={true} md={6}>
                <div className="sdlc-step-box h-100 p-3 rounded-3">
                  <div className="text-info fw-bold small mb-1">
                    <FaProjectDiagram className="me-1" /> 1. Gestión & Scrum
                  </div>
                  <div className="text-white-50" style={{ fontSize: "0.78rem", lineHeight: "1.45" }}>
                    Levantamiento de requerimientos, sprints en <strong>Jira y Trello</strong>, estimación y entregas incrementales.
                  </div>
                </div>
              </Col>
              <Col lg={true} md={6}>
                <div className="sdlc-step-box h-100 p-3 rounded-3">
                  <div className="text-success fw-bold small mb-1">
                    <FaCode className="me-1" /> 2. Desarrollo & PWA
                  </div>
                  <div className="text-white-50" style={{ fontSize: "0.78rem", lineHeight: "1.45" }}>
                    Arquitectura limpia en <strong>React, Angular, Flutter y Node.js</strong>, más <strong>PWAs instalables</strong>.
                  </div>
                </div>
              </Col>
              <Col lg={true} md={6}>
                <div className="sdlc-step-box h-100 p-3 rounded-3">
                  <div style={{ color: "#a78bfa" }} className="fw-bold small mb-1">
                    <FaRobot className="me-1" /> 3. IA & Ciencia de Datos
                  </div>
                  <div className="text-white-50" style={{ fontSize: "0.78rem", lineHeight: "1.45" }}>
                    APIs de <strong>OpenAI, Claude y Gemini</strong>, ingeniería asistida con <strong>Codex/Claude</strong> y analítica <strong>SQL/Python</strong>.
                  </div>
                </div>
              </Col>
              <Col lg={true} md={6}>
                <div className="sdlc-step-box h-100 p-3 rounded-3">
                  <div className="text-warning fw-bold small mb-1">
                    <FaCloudUploadAlt className="me-1" /> 4. Git & Cloud AWS
                  </div>
                  <div className="text-white-50" style={{ fontSize: "0.78rem", lineHeight: "1.45" }}>
                    Flujos en <strong>Git y GitHub</strong> (ramas, PRs), contenedores Docker y despliegue en <strong>AWS S3 & CloudFront</strong>.
                  </div>
                </div>
              </Col>
              <Col lg={true} md={12}>
                <div className="sdlc-step-box h-100 p-3 rounded-3">
                  <div className="text-info fw-bold small mb-1">
                    <FaTools className="me-1" /> 5. Mantenimiento
                  </div>
                  <div className="text-white-50" style={{ fontSize: "0.78rem", lineHeight: "1.45" }}>
                    Mantenimiento correctivo y evolutivo, refactorización, optimización de consultas y soporte post-lanzamiento.
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="value-pillar-card h-100 p-4">
                <div className="value-pillar-icon-wrap mb-3">
                  <FaLaptopCode />
                </div>
                <div className="value-pillar-num">01 • WEB, SAAS & PWA</div>
                <h4 className="value-pillar-title mt-1 mb-2">
                  Sistemas Web, CRMs & PWAs
                </h4>
                <p className="value-pillar-desc mb-3">
                  Desarrollo plataformas SaaS multi-sucursal, sistemas LIMS/CRM y <strong>Progressive Web Apps (PWA)</strong> instalables con Service Workers, estado reactivo y alta velocidad.
                </p>
                <div className="mt-auto pt-2 d-flex flex-wrap gap-1">
                  <span className="mini-skill-tag">React.js</span>
                  <span className="mini-skill-tag">Angular</span>
                  <span className="mini-skill-tag">TypeScript</span>
                  <span className="mini-skill-tag">PWA</span>
                  <span className="mini-skill-tag">RxJS</span>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="value-pillar-card h-100 p-4">
                <div className="value-pillar-icon-wrap icon-emerald mb-3">
                  <FaMobileAlt />
                </div>
                <div className="value-pillar-num">02 • APPS MÓVILES</div>
                <h4 className="value-pillar-title mt-1 mb-2">
                  Apps iOS & Android en Tienda
                </h4>
                <p className="value-pillar-desc mb-3">
                  Construyo aplicaciones móviles nativas multiplataforma desde la arquitectura hasta su publicación en <strong>Google Play</strong>, con sincronización local <strong>Offline-First (SQLite)</strong>.
                </p>
                <div className="mt-auto pt-2 d-flex flex-wrap gap-1">
                  <span className="mini-skill-tag">Flutter</span>
                  <span className="mini-skill-tag">Dart</span>
                  <span className="mini-skill-tag">Riverpod</span>
                  <span className="mini-skill-tag">SQLite Offline</span>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="value-pillar-card h-100 p-4">
                <div className="value-pillar-icon-wrap icon-indigo mb-3">
                  <FaRobot />
                </div>
                <div className="value-pillar-num">03 • IA & CIENCIA DE DATOS</div>
                <h4 className="value-pillar-title mt-1 mb-2">
                  LLMs, Analítica & Automatización
                </h4>
                <p className="value-pillar-desc mb-3">
                  Integro modelos de IA (<strong>OpenAI, Claude, Gemini, Codex</strong>), análisis de datos con <strong>SQL y Python</strong>, dashboards interactivos (Chart.js) y flujos con WhatsApp API.
                </p>
                <div className="mt-auto pt-2 d-flex flex-wrap gap-1">
                  <span className="mini-skill-tag">OpenAI / Claude</span>
                  <span className="mini-skill-tag">Codex / Gemini</span>
                  <span className="mini-skill-tag">Data Science SQL</span>
                  <span className="mini-skill-tag">Python</span>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="value-pillar-card h-100 p-4">
                <div className="value-pillar-icon-wrap icon-amber mb-3">
                  <FaLayerGroup />
                </div>
                <div className="value-pillar-num">04 • CLOUD, GESTIÓN & SOPORTE</div>
                <h4 className="value-pillar-title mt-1 mb-2">
                  APIs, Cloud AWS & Mantenimiento
                </h4>
                <p className="value-pillar-desc mb-3">
                  Diseño APIs REST con Node.js, bases de datos SQL/NoSQL, despliegue en <strong>AWS (S3, CloudFront)</strong>, gestión en <strong>Jira/Trello/Git</strong> y mantenimiento evolutivo.
                </p>
                <div className="mt-auto pt-2 d-flex flex-wrap gap-1">
                  <span className="mini-skill-tag">Node.js</span>
                  <span className="mini-skill-tag">AWS Cloud</span>
                  <span className="mini-skill-tag">Git / Jira / Trello</span>
                  <span className="mini-skill-tag">Mantenimiento</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* SECTION 2: REAL CV EXPERIENCE, DUAL EDUCATION & CERTIFICATIONS */}
        <div className="py-5">
          <Row className="g-5 align-items-stretch">
            {/* Left Column: Work Experience & Dual Education from CV */}
            <Col lg={7}>
              <div className="mb-4 text-start">
                <span className="section-eyebrow">EXPERIENCIA PROFESIONAL Y EDUCACIÓN</span>
                <h3 className="section-main-title mt-2">
                  Trayectoria <span className="text-gradient-brand">Comprobable</span>
                </h3>
              </div>

              <div className="modern-timeline">
                {/* 1. Kyndrasoft */}
                <div className="timeline-card">
                  <div className="timeline-dot dot-emerald"></div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                    <span className="timeline-role">Desarrollador Web, Móvil e Integración IA</span>
                    <span className="timeline-badge-green">2024 – 2026</span>
                  </div>
                  <h5 className="timeline-company">Kyndrasoft</h5>
                  <ul className="timeline-bullet-list mb-0">
                    <li>
                      Arquitectura y desarrollo de plataformas SaaS y <strong>Progressive Web Apps (PWA)</strong> interactivas (<em>Velisse EventPass, Jafra CRM</em>) y sistemas clínicos multi-sucursal (<em>CMR Clínico LIMS</em>).
                    </li>
                    <li>
                      Desarrollo móvil multiplataforma con apps publicadas en <strong>Google Play</strong> (<em>AllFitness con Flutter</em>), comercio electrónico (<em>Kraken Store</em>) y mantenimiento correctivo/optimización de sistemas en operación.
                    </li>
                    <li>
                      Participación en todas las etapas del desarrollo (SDLC) bajo metodologías ágiles (<strong>Scrum con Jira y Trello</strong>), control de versiones (<strong>Git y GitHub</strong>), integración de <strong>IA (OpenAI, Gemini, Claude)</strong> y despliegue en <strong>AWS (S3, CloudFront)</strong>.
                    </li>
                  </ul>
                </div>

                {/* 2. Freelancer */}
                <div className="timeline-card">
                  <div className="timeline-dot dot-cyan"></div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                    <span className="timeline-role">Desarrollador Web & Consultor de Software</span>
                    <span className="timeline-badge">2023 – 2024</span>
                  </div>
                  <h5 className="timeline-company">Freelancer — Proyectos a Medida & E-Commerce</h5>
                  <ul className="timeline-bullet-list mb-0">
                    <li>
                      Desarrollo de <strong>sitios web y soluciones de comercio electrónico (E-Commerce)</strong> a medida, con diseño responsivo, pasarelas de pago y catálogos dinámicos.
                    </li>
                    <li>
                      Creación de páginas web modernas con <strong>React, JavaScript, HTML5 y CSS3</strong>, optimización de velocidad de carga, SEO y soporte técnico continuo para clientes independientes.
                    </li>
                  </ul>
                </div>

                {/* 3. BUAP Portal */}
                <div className="timeline-card">
                  <div className="timeline-dot dot-indigo"></div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                    <span className="timeline-role">Desarrollador Full Stack & Analítica de Datos</span>
                    <span className="timeline-badge">Enero 2023 – Junio 2023</span>
                  </div>
                  <h5 className="timeline-company">
                    Portal de Gestión Académica — Benemérita Universidad Autónoma de Puebla (BUAP)
                  </h5>
                  <ul className="timeline-bullet-list mb-0">
                    <li>
                      Desarrollo Full-Stack de sistema institucional para el análisis estadístico de actividades estudiantiles con interfaces reactivas en <strong>React.js</strong>.
                    </li>
                    <li>
                      Construcción de API REST con <strong>Node.js (CRUD)</strong>, modelado relacional en <strong>SQL</strong> y visualizaciones gráficas dinámicas con <strong>Chart.js</strong>.
                    </li>
                  </ul>
                </div>

                {/* 4. Educación Formal: BUAP + CBTIS 260 (Ambos títulos destacados) */}
                <div className="timeline-card mb-0">
                  <div className="timeline-dot dot-amber"></div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                    <span className="timeline-role">
                      <FaGraduationCap className="me-1" /> Educación Formal — Doble Titulación en Computación y Programación
                    </span>
                    <span className="timeline-badge-green">2 Títulos Oficiales</span>
                  </div>

                  {/* Título 1: BUAP */}
                  <div className="p-3 rounded-3 mb-2" style={{ background: "rgba(2, 6, 23, 0.55)", border: "1px solid rgba(56, 189, 248, 0.22)" }}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-1 mb-1">
                      <h5 className="timeline-company m-0 text-white">
                        Benemérita Universidad Autónoma de Puebla (BUAP)
                      </h5>
                      <span className="cert-issuer-tag">Título Universitario</span>
                    </div>
                    <div className="text-info fw-bold small mb-1">
                      Ingeniería en Ciencias de la Computación
                    </div>
                    <p className="timeline-desc mb-0">
                      Formación integral en ingeniería de software, algoritmos avanzados, estructuras de datos, inteligencia artificial, ciencia de datos, redes y arquitectura de sistemas.
                    </p>
                  </div>

                  {/* Título 2: CBTIS 260 */}
                  <div className="p-3 rounded-3" style={{ background: "rgba(2, 6, 23, 0.55)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-1 mb-1">
                      <h5 className="timeline-company m-0 text-white">
                        CBTIS 260
                      </h5>
                      <span className="timeline-badge-green">Título Técnico Oficial</span>
                    </div>
                    <div className="text-success fw-bold small mb-1">
                      Título Técnico en Programación
                    </div>
                    <p className="timeline-desc mb-0">
                      Base técnica sólida en desarrollo de software, lógica computacional, programación orientada a objetos (POO), desarrollo web y bases de datos relacionales.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column: Certifications, Languages & Recruiter Summary */}
            <Col lg={5}>
              <div className="recruiter-pitch-box h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="pitch-badge">
                      <FaCertificate className="me-1" /> CERTIFICACIONES Y FORMACIÓN
                    </span>
                  </div>

                  <h4 className="text-white fw-bold mb-3 text-start">
                    Respaldo Técnico & Certificados
                  </h4>

                  <div className="cert-cards-stack mb-4 text-start">
                    <div className="cert-mini-card p-3 rounded-3 mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-white">ONE — Oracle Next Education</strong>
                        <span className="cert-issuer-tag">Oracle + Alura</span>
                      </div>
                      <div className="text-white-50 small mt-1">
                        • Formación en <strong>Data Science con SQL</strong><br />
                        • Formación en <strong>React</strong> y <strong>JavaScript</strong>
                      </div>
                    </div>

                    <div className="cert-mini-card p-3 rounded-3 mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-white">Flutter Avanzado</strong>
                        <span className="cert-issuer-tag">Udemy • Fernando Herrera</span>
                      </div>
                      <div className="text-white-50 small mt-1">
                        Arquitectura limpia, manejo de estado reactivo y despliegue móvil.
                      </div>
                    </div>

                    <div className="cert-mini-card p-3 rounded-3 mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-white">IoT Fundamentals: Connecting Things</strong>
                        <span className="cert-issuer-tag">Cisco Networking Academy</span>
                      </div>
                      <div className="text-white-50 small mt-1">
                        Conectividad de dispositivos, sensores, redes y sistemas distribuidos.
                      </div>
                    </div>

                    <div className="cert-mini-card p-3 rounded-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-white">Git y GitHub Profesional</strong>
                        <span className="cert-issuer-tag">By Alura</span>
                      </div>
                      <div className="text-white-50 small mt-1">
                        Control de versiones colaborativo, ramas, Pull Requests y flujos en equipo.
                      </div>
                    </div>
                  </div>

                  {/* Languages Block */}
                  <div className="mb-4 text-start">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <FaGlobeAmericas className="text-info" />
                      <span className="text-white fw-bold small">IDIOMAS</span>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="lang-badge">Español: <strong>Nativo</strong></span>
                      <span className="lang-badge">Inglés: <strong>Intermedio</strong></span>
                      <span className="lang-badge">Francés: <strong>Nivel Inicial</strong></span>
                    </div>
                  </div>

                  {/* Key Differentiators */}
                  <div className="pitch-checklist text-start pt-2 border-top border-secondary">
                    <div className="pitch-check-row mb-2">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span className="text-white-50 small">
                        <strong className="text-white">Perfil versátil en Ciencias de la Computación:</strong> Desarrollo Web/Móvil/PWA, IA (OpenAI, Claude, Codex, Gemini), Ciencia de Datos y Cloud AWS.
                      </span>
                    </div>
                    <div className="pitch-check-row mb-2">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span className="text-white-50 small">
                        <strong className="text-white">Cultura de equipo e ingeniería:</strong> Scrum, Jira, Trello, Git/GitHub y mantenimiento evolutivo/correctivo.
                      </span>
                    </div>
                    <div className="pitch-check-row mb-3">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <span className="text-white-50 small">
                        <strong className="text-white">Disponibilidad inmediata:</strong> Modalidad Remota (Nacional / Internacional), Híbrida o con disponibilidad de relocalización.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pitch-footer-box p-3 rounded-3 text-start">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                      <div className="text-white fw-bold small">¿Quieres ver todo mi stack tecnológico?</div>
                      <div className="text-white-50" style={{ fontSize: "0.78rem" }}>
                        Explora mis lenguajes, herramientas de IA, Cloud y certificaciones.
                      </div>
                    </div>
                    <Link to="/about" className="pitch-link-btn">
                      Ver Perfil & Stack <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* SECTION 3: DIRECT HIRE / CONTACT HUB (#contacto) — Quick Message Builder Removed */}
        <div id="contacto" className="pt-4 pb-5">
          <div className="contact-conversion-card p-4 p-md-5 text-center">
            <span className="hero-availability-badge mb-3 d-inline-flex">
              <span className="hero-live-dot"></span> Disponible para Nuevas Vacantes y Proyectos
            </span>
            <h2 className="section-main-title mb-3 mx-auto" style={{ maxWidth: "780px" }}>
              ¿Buscas un{" "}
              <span className="text-gradient-brand">
                Ingeniero en Ciencias de la Computación
              </span>{" "}
              en tu equipo?
            </h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: "720px", fontSize: "1.02rem", lineHeight: "1.65" }}>
              Ya sea para posiciones de <strong>Desarrollo Full-Stack, Frontend, Mobile (Flutter), Inteligencia Artificial, Ciencia de Datos o Ingeniería de Software</strong>, contáctame directamente o descarga mi CV actualizado.
            </p>

            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jesus-adiv-barroso-manilla-9544a72a4/"
                target="_blank"
                rel="noreferrer"
                className="hero-btn-primary text-decoration-none"
              >
                <FaLinkedinIn className="me-2" /> LinkedIn
              </a>

              <a
                href="https://github.com/JesusAdiv"
                target="_blank"
                rel="noreferrer"
                className="hero-btn-secondary text-decoration-none"
              >
                <FaGithub className="me-2" /> GitHub
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="hero-btn-secondary"
                title="Copiar correo jesusadiv1@gmail.com"
              >
                {emailCopied ? (
                  <>
                    <FaCheck className="me-2 text-success" /> ¡Correo copiado!
                  </>
                ) : (
                  <>
                    <FaCopy className="me-2 text-info" /> Copiar Correo: jesusadiv1@gmail.com
                  </>
                )}
              </button>

              <a
                href={cvPdf}
                download="Jesus_Adiv_Barroso_CV.pdf"
                className="hero-btn-secondary text-decoration-none"
              >
                <AiOutlineDownload className="me-2 text-info" /> Descargar CV en PDF
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Container>

    {/* Floating Toast Notification when copying email — elevated above footer */}
    {emailCopied && (
      <div className="copy-toast-notification" role="status" aria-live="polite">
        <div
          style={{
            background: "rgba(16, 185, 129, 0.2)",
            color: "#10b981",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            flexShrink: 0,
          }}
        >
          <FaCheck />
        </div>
        <div className="text-start pe-2">
          <div className="fw-bold text-white" style={{ fontSize: "0.9rem" }}>
            ¡Correo copiado al portapapeles!
          </div>
          <div className="text-info small" style={{ fontSize: "0.8rem" }}>
            jesusadiv1@gmail.com
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default Home2;
