import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaRocket,
  FaCheckCircle,
  FaLaptopCode,
  FaMobileAlt,
  FaArrowRight,
  FaPaperPlane,
  FaGlobeAmericas,
  FaRobot,
  FaDatabase,
  FaCodeBranch,
  FaFlask,
} from "react-icons/fa";
import cvPdf from "../../Assets/Jesus_Adiv_Barroso_CV.pdf";

function Home() {
  const publicUrl = process.env.PUBLIC_URL || "";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center g-5">
            {/* Left Column: High-Conversion Value Proposition */}
            <Col lg={7}>
              <div className="hero-badge-wrap mb-3 d-flex flex-wrap align-items-center gap-2">
                <span className="hero-availability-badge">
                  <span className="hero-live-dot"></span>
                  Disponible para Contratación • Full-Time / Freelance
                </span>
                <span className="hero-location-pill">
                  <FaGlobeAmericas className="me-1 text-info" /> Remoto (Nacional / Internacional) • Híbrido
                </span>
              </div>

              <h1 className="hero-main-headline mb-3">
                Ingeniería de Software,{" "}
                <span className="text-gradient-brand">
                  Web, Móvil, IA & Ciencia de Datos
                </span>{" "}
                en producción.
              </h1>

              <p className="hero-lead-text mb-4">
                Soy <strong>Jesús Adiv Barroso Manilla</strong>,{" "}
                <strong>Ingeniero en Ciencias de la Computación (BUAP)</strong> y{" "}
                <strong>Técnico en Programación (CBTIS 260)</strong> con experiencia
                profesional en <strong>Kyndrasoft (2024–2026)</strong> y proyectos a
                medida. Desarrollo desde <strong>apps en Google Play, sistemas SaaS y PWAs</strong>{" "}
                hasta soluciones con <strong>Inteligencia Artificial (OpenAI, Claude, Gemini, Codex)</strong>,{" "}
                <strong>analítica de datos (SQL / Python)</strong> e infraestructura en{" "}
                <strong>AWS</strong>.
              </p>

              {/* Quick Value Bullets for 5-second scan */}
              <div className="hero-quick-checks d-flex flex-wrap gap-2 mb-4">
                <div className="hero-check-pill">
                  <FaCheckCircle className="text-success me-2" />
                  <span>React • Angular • Flutter • Node.js • PWA</span>
                </div>
                <div className="hero-check-pill">
                  <FaCheckCircle className="text-success me-2" />
                  <span>IA (OpenAI, Claude, Codex, Gemini) & Data Science</span>
                </div>
                <div className="hero-check-pill">
                  <FaCheckCircle className="text-success me-2" />
                  <span>Scrum • Jira • Trello • Git/GitHub • AWS Cloud</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="hero-cta-group d-flex flex-wrap align-items-center gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("proyectos")}
                  className="hero-btn-primary"
                >
                  <FaRocket className="me-2" />
                  Ver Proyectos (7)
                  <FaArrowRight className="ms-2" />
                </button>

                <a
                  href={cvPdf}
                  download="Jesus_Adiv_Barroso_CV.pdf"
                  className="hero-btn-secondary text-decoration-none"
                >
                  <AiOutlineDownload className="me-2 text-info" />
                  Descargar CV (PDF)
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection("contacto")}
                  className="hero-btn-secondary"
                >
                  <FaPaperPlane className="me-2 text-success" />
                  Contactar
                </button>

                <div className="d-flex align-items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/jesus-adiv-barroso-manilla-9544a72a4/"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-pill"
                    title="Conectar en LinkedIn"
                  >
                    <FaLinkedinIn className="me-1" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/JesusAdiv"
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-pill"
                    title="Ver repositorios en GitHub"
                  >
                    <AiFillGithub className="me-1" /> GitHub
                  </a>
                </div>
              </div>

              {/* Proof Metrics Bar */}
              <div className="hero-metrics-grid mt-4 pt-3">
                <div className="hero-metric-item">
                  <div className="hero-metric-value text-gradient-brand">3+ Años</div>
                  <div className="hero-metric-label">Experiencia en Software, Web, Móvil e IA</div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-value">Play Store & PWA</div>
                  <div className="hero-metric-label">Apps nativas y Progressive Web Apps</div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-value">7 Proyectos</div>
                  <div className="hero-metric-label">SaaS, CRMs, LIMS, Analítica y E-Commerce</div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-value">BUAP + CBTIS</div>
                  <div className="hero-metric-label">Ing. Ciencias Computación + Téc. Programación</div>
                </div>
              </div>
            </Col>

            {/* Right Column: Computer Science & Engineering Architecture Bento */}
            <Col lg={5}>
              <div className="hero-bento-showcase">
                <div className="hero-bento-header d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                  <div className="d-flex align-items-center gap-2">
                    <span className="bento-window-dots">
                      <i></i><i></i><i></i>
                    </span>
                    <span className="bento-header-title ms-1">PERFIL TÉCNICO • ING. CIENCIAS DE LA COMPUTACIÓN</span>
                  </div>
                  <span className="bento-verified-tag">✓ Full SDLC</span>
                </div>

                {/* Domain 1: Full-Stack, Mobile & PWA */}
                <div className="hero-product-card mb-2">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bento-domain-icon icon-cyan">
                      <FaLaptopCode />
                    </div>
                    <div className="text-start">
                      <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                        <h6 className="m-0 text-white fw-bold">Desarrollo Full-Stack, Móvil & PWA</h6>
                        <span className="hero-prod-badge-green">PRODUCCIÓN</span>
                      </div>
                      <p className="hero-prod-desc mb-2">
                        Arquitecturas SPA, Progressive Web Apps instalables (Service Workers) y apps iOS/Android Offline-First con <strong>React, Angular, Flutter, Dart y Node.js</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Domain 2: AI Engineering & Data Science */}
                <div className="hero-product-card mb-2">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bento-domain-icon icon-indigo">
                      <FaRobot />
                    </div>
                    <div className="text-start">
                      <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                        <h6 className="m-0 text-white fw-bold">Inteligencia Artificial & Ciencia de Datos</h6>
                        <span className="hero-prod-badge-blue">LLMs & DATA</span>
                      </div>
                      <p className="hero-prod-desc mb-2">
                        Integración de <strong>OpenAI API, Claude, Gemini y Codex</strong>, salidas estructuradas JSON, analítica de datos con <strong>SQL, Python y Chart.js</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Domain 3: Agile, DevOps, Cloud & Maintenance */}
                <div className="hero-product-card mb-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bento-domain-icon icon-amber">
                      <FaCodeBranch />
                    </div>
                    <div className="text-start">
                      <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                        <h6 className="m-0 text-white fw-bold">Cloud AWS, Gestión Ágil & Mantenimiento</h6>
                        <span className="hero-prod-badge-gold">SCRUM & CLOUD</span>
                      </div>
                      <p className="hero-prod-desc mb-0">
                        Flujos colaborativos con <strong>Git, GitHub, Jira y Trello</strong> bajo Scrum. Despliegue en <strong>AWS (S3, CloudFront)</strong> y mantenimiento evolutivo/correctivo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Demos Strip */}
                <div className="hero-stack-summary p-2 px-3 rounded-3">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span className="text-white-50 small fw-semibold">
                      ⚡ Demos interactivas en vivo (sin login):
                    </span>
                    <div className="d-flex flex-wrap gap-1">
                      <a
                        href={`${publicUrl}/allfitness-mobile/simulator.html`}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-mini-link"
                      >
                        <FaMobileAlt className="me-1 text-success" /> AllFitness (Flutter)
                      </a>
                      <a
                        href={`${publicUrl}/proyectos/sinerlab/index.html`}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-mini-link"
                      >
                        <FaFlask className="me-1 text-info" /> Sinerlab LIS
                      </a>
                      <a
                        href={`${publicUrl}/demo-jafra/index.html`}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-mini-link"
                      >
                        <FaDatabase className="me-1 text-warning" /> Jafra CRM
                      </a>
                      <a
                        href={`${publicUrl}/proyectos/velisse-app/index.html`}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-mini-link"
                      >
                        ✨ Velisse SaaS PWA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Unified Section with all 7 Real Production Projects */}
      <Projects embedded={true} />

      {/* Value Proposition, Full SDLC, Experience & Direct Contact Hub */}
      <Home2 />
    </section>
  );
}

export default Home;
