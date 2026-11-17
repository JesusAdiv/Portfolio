import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AllFitnessCard from "./AllFitnessCard";
import AllFitnessModal from "./AllFitnessModal";
import VelisseCard from "./VelisseCard";
import Particle from "../Particle";
import { FaFlask, FaFileMedicalAlt, FaClinicMedical } from "react-icons/fa";
import krakenLogo from "../../Assets/MyProyects/Kraken-store/Logo-Kraken.png";
import jafraLogo from "../../Assets/MyProyects/Jafra/jafra-logo.png";
import buapLogo from "../../Assets/MyProyects/Buap/Logo_de_la_BUAP.webp";
import muscleSelectorImg from "../../Assets/MyProyects/muscleselector/muscleselector.jpg";

function Projects({ embedded = false }) {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [showAllFitness, setShowAllFitness] = useState(false);
  const [initialFullscreen, setInitialFullscreen] = useState(false);

  // Category filter
  const [activeFilter, setActiveFilter] = useState("all");

  const handleOpenAllFitness = (fullscreen = false) => {
    setInitialFullscreen(fullscreen);
    setShowAllFitness(true);
  };

  const showCard = (categories) => {
    if (activeFilter === "all") return true;
    return categories.includes(activeFilter);
  };

  const cmrCustomVisual = (
    <div className="cmr-visual-banner d-flex flex-column justify-content-between p-3">
      <div className="d-flex justify-content-between align-items-center w-100">
        <span className="cmr-visual-chip">
          <FaClinicMedical className="me-1" /> Multi-Sucursal
        </span>
        <span className="cmr-visual-chip-right">COFEPRIS NOM-007</span>
      </div>
      <div className="cmr-visual-center my-2 d-flex align-items-center justify-content-center gap-3">
        <div className="cmr-icon-orb">
          <FaFlask />
        </div>
        <div className="text-start">
          <div className="cmr-visual-title">Sinerlab LIS — CRM Clínico</div>
          <div className="cmr-visual-sub">Recepción → Analítica → Delta Check → jsPDF</div>
        </div>
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <span className="cmr-step-pill"><FaFileMedicalAlt className="me-1" /> Códigos de Barras</span>
        <span className="cmr-step-pill">🔬 Validación LIS</span>
        <span className="cmr-step-pill">💰 POS & Arqueos</span>
      </div>
    </div>
  );

  return (
    <Container
      fluid
      className={`project-section ${embedded ? "project-section-embedded" : ""}`}
      id="proyectos"
    >
      {!embedded && <Particle />}
      <Container>
        <div className="section-header-wrap text-center mb-4">
          <span className="section-eyebrow">PORTAFOLIO COMPROBABLE • 7 SISTEMAS</span>
          <h2 className="section-main-title mt-2">
            Proyectos Reales en <span className="text-gradient-brand">Producción</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Soluciones de ingeniería diseñadas y desplegadas para resolver problemas reales: desde apps en Google Play, plataformas SaaS y Progressive Web Apps (PWA) hasta sistemas de analítica de datos, LIMS clínicos y CRMs comerciales.
          </p>

          {/* Filter Pills */}
          <div className="project-filter-bar d-flex flex-wrap justify-content-center gap-2 mt-4">
            <button
              type="button"
              className={`project-filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              Todos los Proyectos (7)
            </button>
            <button
              type="button"
              className={`project-filter-btn ${activeFilter === "saas" ? "active" : ""}`}
              onClick={() => setActiveFilter("saas")}
            >
              ⭐ SaaS, PWA & IA
            </button>
            <button
              type="button"
              className={`project-filter-btn ${activeFilter === "crm" ? "active" : ""}`}
              onClick={() => setActiveFilter("crm")}
            >
              💼 Sistemas Web, Datos & CRM
            </button>
            <button
              type="button"
              className={`project-filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
              onClick={() => setActiveFilter("mobile")}
            >
              📱 Mobile & E-Commerce
            </button>
          </div>
        </div>

        <Row className="g-4" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. AllFitness */}
          {showCard(["saas", "mobile"]) && (
            <Col lg={4} md={6} className="project-card">
              <AllFitnessCard onOpenModal={handleOpenAllFitness} />
            </Col>
          )}

          {/* 2. Velisse Invitaciones SaaS & PWA */}
          {showCard(["saas", "crm"]) && (
            <Col lg={4} md={6} className="project-card">
              <VelisseCard />
            </Col>
          )}

          {/* 3. Jafra CRM & PWA */}
          {showCard(["crm", "saas"]) && (
            <Col lg={4} md={6} className="project-card">
              <ProjectCard
                featuredClass="jafra-card-highlight"
                category="💼 CRM COMERCIAL & PWA • AWS CLOUDFRONT"
                statusBadge="PWA & Cloud"
                imgPath={jafraLogo}
                imgClassName="project-card-img-invert"
                isBlog={false}
                title="Jafra — CRM de Ventas, Cobranza & PWA"
                description="Plataforma web y Progressive Web App (PWA) para líderes comerciales que automatiza pedidos, catálogo SKU, cobranza y seguimiento de metas."
                highlights={[
                  "Arquitectura PWA instalable con catálogo SKU accesible en campo.",
                  "Generador de estados de cuenta y notas para WhatsApp en 1 clic.",
                  "Cálculo de comisiones por linaje, control de saldos y alertas de recompra."
                ]}
                tags={[
                  "Angular",
                  "TypeScript",
                  "PWA (Service Workers)",
                  "AWS CloudFront",
                  "RxJS",
                  "SCSS",
                  "WhatsApp Flow"
                ]}
                techSpecs={[
                  {
                    label: "Patrón & Arquitectura",
                    value: "SPA Reactiva + Progressive Web App (PWA) orientada a operación comercial en campo y gestión de cartera."
                  },
                  {
                    label: "Frontend & PWA",
                    value: "Angular, TypeScript, SCSS modular, estado reactivo con RxJS (BehaviorSubject), Web App Manifest y Service Workers (Stale-While-Revalidate)."
                  },
                  {
                    label: "Motores de Negocio",
                    value: "Indexación en memoria para búsqueda instantánea de códigos SKU, cálculo automatizado de márgenes/comisiones por linaje y serializador de notas para WhatsApp."
                  },
                  {
                    label: "Infraestructura Cloud",
                    value: "Desplegado en AWS CloudFront (CDN) + S3 con Route Guards de administración y control de acceso basado en roles (RBAC)."
                  }
                ]}
                demoLink={`${publicUrl}/demo-jafra/index.html`}
                demoLabel="Probar Demo Jafra CRM"
                prodLink="https://d3qljhtted9p9h.cloudfront.net/app/dashboard?accessDenied=administration"
                prodLabel="CloudFront (Prod)"
                prodTitle="Abrir entorno real en AWS CloudFront (requiere cuenta corporativa de Jafra)"
              />
            </Col>
          )}

          {/* 4. Portal de Gestión Académica BUAP */}
          {showCard(["crm"]) && (
            <Col lg={4} md={6} className="project-card">
              <ProjectCard
                category="🏛️ SISTEMA INSTITUCIONAL & DATA • BUAP"
                statusBadge="Full-Stack & Datos"
                imgPath={buapLogo}
                isBlog={false}
                title="Portal de Gestión Académica — BUAP"
                description="Sistema web Full-Stack y tablero analítico para administrar, evaluar y visualizar el impacto de las actividades estudiantiles en la universidad."
                highlights={[
                  "Panel administrativo para registro, auditoría y control de actividades.",
                  "Analítica de datos con gráficas dinámicas en tiempo real (Chart.js).",
                  "API RESTful propia para gestión de estudiantes, métricas y reportes."
                ]}
                tags={["React.js", "Node.js", "Express", "REST API", "SQL", "Chart.js", "Data Analytics"]}
                techSpecs={[
                  {
                    label: "Patrón & Arquitectura",
                    value: "Arquitectura Cliente-Servidor desacoplada (SPA Frontend + API RESTful Backend)."
                  },
                  {
                    label: "Frontend & Visualización",
                    value: "React.js (Hooks useState, useEffect), Bootstrap y motor de visualización estadística con Chart.js para métricas institucionales."
                  },
                  {
                    label: "Backend & API",
                    value: "Node.js con Express.js, diseño de endpoints RESTful con operaciones CRUD completas, middlewares de validación y manejo de errores."
                  },
                  {
                    label: "Persistencia & Consultas",
                    value: "Base de datos relacional SQL con consultas de agregación para reportes por facultad, periodo y participación estudiantil."
                  }
                ]}
                ghLink="https://github.com/JesusAdiv/ProyectoPracticas"
              />
            </Col>
          )}

          {/* 5. Sinerlab LIS — Sistema de Información Clínica & CRM */}
          {showCard(["crm", "saas"]) && (
            <Col lg={4} md={6} className="project-card">
              <ProjectCard
                featuredClass="sinerlab-card-highlight"
                category="🏥 HEALTHTECH LIS • COFEPRIS NOM-007"
                statusBadge="LIS & Mock VIP"
                customVisual={cmrCustomVisual}
                isBlog={false}
                title="Sinerlab LIS — Sistema Clínico & CRM"
                description="Sistema integral de información para laboratorios de análisis clínicos (LIS) y CRM médico diseñado bajo normativas de salud COFEPRIS (NOM-007-SSA3-2011)."
                highlights={[
                  "Flujo clínico 360°: recepción con códigos de barras, cotizador en tiempo real y validación analítica con delta check.",
                  "Control de entregas multicanal (WhatsApp/Email), terminal POS con arqueos auditados y reportes oficiales en jsPDF.",
                  "Modo Demostración Offline Autónomo VIP con 6+ meses de datos simulados en memoria sin requerir backend."
                ]}
                tags={["Angular 11", "TypeScript", "RxJS", "SCSS", "Chart.js", "jsPDF", "html2canvas", "LIMS HealthTech"]}
                techSpecs={[
                  {
                    label: "Patrón & Arquitectura",
                    value: "Enterprise SaaS HealthTech con base-href './' y Hash Routing agnóstico a servidor, optimizado para auditoría y demostración inmediata."
                  },
                  {
                    label: "Frontend & UI",
                    value: "Angular 11, TypeScript, RxJS, tema Black Dashboard Pro, componentes ngx-bootstrap, FontAwesome y diseño responsivo."
                  },
                  {
                    label: "BI & Documentación",
                    value: "Tableros de volumen y tendencias con Chart.js; generación cliente de tickets de arqueo, cotizaciones y reportes COFEPRIS con jsPDF y html2canvas."
                  },
                  {
                    label: "Motor Mock & Estado",
                    value: "MockBackendInterceptor (HttpInterceptor) y LocalStorage State Engine que interceptan peticiones REST y simulan persistencia completa."
                  }
                ]}
                demoLink={`${publicUrl}/proyectos/sinerlab/index.html`}
                demoLabel="Probar Demo Sinerlab LIS"
              />
            </Col>
          )}

          {/* 6. Kraken Store */}
          {showCard(["mobile"]) && (
            <Col lg={4} md={6} className="project-card">
              <ProjectCard
                category="🛒 E-COMMERCE • COMERCIO ELECTRÓNICO"
                statusBadge="En Operación"
                imgPath={krakenLogo}
                isBlog={false}
                title="Kraken Store — Tienda Online"
                description="Plataforma de comercio electrónico diseñada para venta continua 24/7 con pasarela de pagos segura, control de inventario y optimización móvil."
                highlights={[
                  "Checkout transaccional con tarjeta y pasarela de pagos integrada.",
                  "Gestión automatizada de inventario por variantes, tallas y SKU.",
                  "Optimización de velocidad y conversión para tráfico móvil (Social Commerce)."
                ]}
                tags={["WordPress", "WooCommerce", "PHP", "MySQL", "Pasarela de Pagos", "SEO Técnico"]}
                techSpecs={[
                  {
                    label: "Arquitectura E-Commerce",
                    value: "Plataforma transaccional sobre WordPress + WooCommerce Core con personalización de plantillas y hooks en PHP."
                  },
                  {
                    label: "Pagos & Logística",
                    value: "Integración de pasarela de cobro con confirmación por webhooks, cálculo automatizado de envíos y reglas de descuento."
                  },
                  {
                    label: "Base de Datos & Catálogo",
                    value: "MySQL con indexación de variaciones de producto, control de stock en tiempo real y prevención de sobreventa."
                  },
                  {
                    label: "Performance & Conversión",
                    value: "Optimización Mobile-First, compresión de activos WebP, caché de página y SEO técnico estructurado."
                  }
                ]}
                instaLink="https://www.instagram.com/kraken_store_puebla"
              />
            </Col>
          )}

          {/* 7. Muscle Selector */}
          {showCard(["mobile"]) && (
            <Col lg={4} md={6} className="project-card">
              <ProjectCard
                category="📦 OPEN SOURCE • PAQUETE FLUTTER"
                statusBadge="GitHub Package"
                imgPath={muscleSelectorImg}
                isBlog={false}
                title="Muscle Selector — Mapa Anatómico"
                description="Librería interactiva de código abierto para Flutter que renderiza y colorea grupos musculares del cuerpo humano en tiempo real."
                highlights={[
                  "Lienzo vectorial anatómico frontal y dorsal 100% interactivo al tacto.",
                  "Algoritmo de mapa de calor (Heatmap) según volumen e intensidad de series.",
                  "Integrado en producción dentro de la app móvil AllFitness en Google Play."
                ]}
                tags={["Flutter", "Dart", "CustomPainter", "SVG Parsing", "Open Source", "Git"]}
                techSpecs={[
                  {
                    label: "Arquitectura del Paquete",
                    value: "Librería modular en Flutter & Dart (fork extendido de muscle_selector) desacoplada para reutilización en apps de salud y biomecánica."
                  },
                  {
                    label: "Motor Gráfico & Touch",
                    value: "Parseo de trazos vectoriales SVG (xml / path_drawing), renderizado nativo a 60 FPS con CustomPainter y detección espacial de toque (HitTesting)."
                  },
                  {
                    label: "Lógica de Heatmap",
                    value: "Interpolación cromática dinámica que traduce el volumen de entrenamiento por grupo muscular en gradientes visuales de activación/fatiga."
                  }
                ]}
                ghLink="https://github.com/JesusAdiv/muscle_selector"
              />
            </Col>
          )}
        </Row>
      </Container>

      <AllFitnessModal
        show={showAllFitness}
        onHide={() => {
          setShowAllFitness(false);
          setInitialFullscreen(false);
        }}
        initialFullscreen={initialFullscreen}
      />
    </Container>
  );
}

export default Projects;
