import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Badge } from "react-bootstrap";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaRedo,
  FaMobileAlt,
  FaQrcode,
  FaWhatsapp,
  FaCheckCircle,
  FaGlassCheers,
  FaChair,
  FaMusic,
  FaRobot,
  FaImages,
  FaCreditCard
} from "react-icons/fa";
import {
  SiAngular,
  SiTypescript,
  SiReactivex,
  SiStripe,
  SiAmazonaws
} from "react-icons/si";

// Assets
import logoVelisse from "../../Assets/MyProyects/Velisse-Invitaciones/logo.png";

const DEMOS = [
  {
    key: "royal",
    name: "Royal Cinematic",
    icon: "👑",
    badge: "Luxury Dark",
    url: `${process.env.PUBLIC_URL || ""}/velisse-demos/royal-cinematic.html`,
    desc: "Invitación de gala con estética dark, animaciones cinemáticas doradas y tipografía Cinzel."
  },
  {
    key: "maison",
    name: "La Maison Dorée",
    icon: "✨",
    badge: "Haute Couture",
    url: `${process.env.PUBLIC_URL || ""}/velisse-demos/la-maison-doree.html`,
    desc: "Estilo floral y champaña con música ambiental inmersiva, tipografía Cormorant y diseño editorial."
  },
  {
    key: "story",
    name: "Story Vertical",
    icon: "📱",
    badge: "Mobile-First",
    url: `${process.env.PUBLIC_URL || ""}/velisse-demos/story-vertical.html`,
    desc: "Formato vertical ultraligero estilo Instagram Stories, RSVP rápido y botones directos a Google Maps."
  }
];

function VelisseModal({ show, onHide, initialView = "royal" }) {
  const [activeTab, setActiveTab] = useState("royal");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (initialView) {
      if (initialView === "real") setActiveTab("royal");
      else if (initialView === "floral") setActiveTab("maison");
      else if (initialView === "modules") setActiveTab("royal");
      else setActiveTab(initialView);
    }
  }, [initialView, show]);

  const activeDemo = DEMOS.find((d) => d.key === activeTab) || DEMOS[0];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      className="velisse-modal-custom"
      dialogClassName="velisse-modal-dialog"
    >
      <Modal.Body className="velisse-modal-body p-0">
        {/* Modal Header */}
        <div className="velisse-modal-header p-3 px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              src={logoVelisse}
              alt="Velisse Logo"
              className="velisse-modal-logo"
            />
            <div>
              <div className="d-flex align-items-center gap-2">
                <h4 className="m-0 velisse-modal-title">Velisse</h4>
                <Badge className="velisse-modal-badge">
                  SAAS PLATFORM
                </Badge>
                <span className="velisse-role-pill">Frontend / Full-Stack</span>
              </div>
              <p className="m-0 velisse-modal-subtitle text-muted">
                Gestión Integral de Eventos & Invitaciones Digitales Interactivas (Angular 13+ • Single Page Application)
              </p>
            </div>
          </div>
          <button
            type="button"
            className="velisse-modal-close"
            onClick={onHide}
            title="Cerrar modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="p-4 velisse-modal-content-grid">
          <Row className="g-4">
            {/* Left Column: Interactive Smartphone Mockup / Visualizer */}
            <Col lg={5} md={12} className="d-flex flex-column align-items-center">
              <div className="velisse-view-selector mb-3 w-100 d-flex flex-wrap justify-content-center gap-2">
                {DEMOS.map((d) => (
                  <button
                    key={d.key}
                    type="button"
                    className={`velisse-tab-btn ${activeTab === d.key ? "active" : ""}`}
                    onClick={() => setActiveTab(d.key)}
                  >
                    <span className="me-1">{d.icon}</span> {d.name}
                  </button>
                ))}
              </div>

              {/* Interactive Smartphone Frame with Live SingleFile HTML Demo */}
              <div className="velisse-phone-wrapper">
                <div className="velisse-phone-device">
                  {/* Notch & Speaker */}
                  <div className="velisse-phone-notch">
                    <div className="velisse-phone-speaker"></div>
                    <div className="velisse-phone-camera"></div>
                  </div>

                  {/* Interactive Live Screen */}
                  <div className="velisse-phone-screen">
                    <iframe
                      key={`${activeTab}-${reloadKey}`}
                      src={activeDemo.url}
                      title={`Velisse Demo - ${activeDemo.name}`}
                      className="velisse-phone-iframe"
                      loading="lazy"
                    />
                  </div>

                  {/* Home Indicator */}
                  <div className="velisse-phone-home-bar"></div>
                </div>

                <div className="velisse-scroll-hint mt-2 text-center">
                  <FaMobileAlt className="me-1 velisse-gold" />
                  <span>Navega dentro del smartphone o pruébala en pantalla completa</span>
                </div>

                {/* Live Action Bar */}
                <div className="velisse-demo-action-bar mt-3 w-100 d-flex gap-2">
                  <Button
                    variant="warning"
                    href={activeDemo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="velisse-live-demo-btn flex-fill d-flex align-items-center justify-content-center gap-1"
                    title="Abrir invitación en una nueva pestaña"
                  >
                    <FaExternalLinkAlt /> <span>Abrir Demo Completa</span>
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => setReloadKey((k) => k + 1)}
                    className="velisse-reload-btn"
                    title="Reiniciar animación"
                  >
                    <FaRedo />
                  </Button>
                </div>
              </div>
            </Col>

            {/* Right Column: Concrete Description, Tech Stack & Architecture */}
            <Col lg={7} md={12} className="velisse-modal-details">
              {/* Section 1: Concrete Summary */}
              <div className="velisse-info-block mb-4">
                <h5 className="velisse-section-heading">
                  <span className="velisse-gold">📌</span> Propuesta de Valor & Solución
                </h5>
                <p className="velisse-text-justify">
                  SaaS diseñado para transformar la tradicional invitación de papel o PDF estático en un
                  <strong> ecosistema digital web interactivo end-to-end</strong>. La plataforma abarca todo el ciclo de vida:
                  diseño y personalización temática con IA, envíos masivos directos a WhatsApp,
                  confirmaciones inteligentes (RSVP), diagramado visual de salas con asignación de mesas
                  (<em>Seating Chart</em>), hasta el control de acceso en puerta mediante escáner QR en tiempo real
                  y portales en vivo para proveedores (DJ y fotógrafo).
                </p>
              </div>

              {/* Section 2: Concrete Tech Stack */}
              <div className="velisse-info-block mb-4">
                <h5 className="velisse-section-heading">
                  <span className="velisse-gold">🛠️</span> Tecnologías & Herramientas Clave
                </h5>
                <Row className="g-2 mt-1">
                  <Col sm={6}>
                    <div className="velisse-tech-box">
                      <div className="velisse-tech-box-title d-flex align-items-center gap-2">
                        <SiAngular className="text-danger" />
                        <SiTypescript style={{ color: "#3178c6" }} />
                        <SiReactivex style={{ color: "#d0021b" }} />
                        <span>Frontend & Arquitectura</span>
                      </div>
                      <ul className="velisse-tech-list">
                        <li><strong>Angular 13+:</strong> Arquitectura modular basada en componentes, servicios y guards.</li>
                        <li><strong>TypeScript & RxJS:</strong> Estado reactivo con Observables, BehaviorSubject y pipes.</li>
                        <li><strong>Seguridad:</strong> Angular Route Guards y HTTP Interceptors para JWT.</li>
                      </ul>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="velisse-tech-box">
                      <div className="velisse-tech-box-title d-flex align-items-center gap-2">
                        <FaGlassCheers className="velisse-gold" />
                        <FaImages className="velisse-gold" />
                        <span>UI, UX & Animaciones</span>
                      </div>
                      <ul className="velisse-tech-list">
                        <li><strong>GSAP & AOS:</strong> Micro-interacciones fluidas y revelado dinámico al scroll.</li>
                        <li><strong>CSS3 Avanzado:</strong> Glassmorphism, paletas dinámicas y diseño Mobile-First.</li>
                        <li><strong>Canvas-Confetti:</strong> Feedback visual festivo al confirmar asistencia (RSVP).</li>
                      </ul>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="velisse-tech-box">
                      <div className="velisse-tech-box-title d-flex align-items-center gap-2">
                        <FaQrcode className="velisse-gold" />
                        <FaCreditCard className="velisse-gold" />
                        <span>Hardware & Utilidades Cliente</span>
                      </div>
                      <ul className="velisse-tech-list">
                        <li><strong>html5-qrcode:</strong> Lector de QR en navegador web móvil para check-in en puerta sin apps nativas.</li>
                        <li><strong>html2canvas & JSZip:</strong> Renderizado y empaquetado de pases digitales directamente en cliente.</li>
                      </ul>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="velisse-tech-box">
                      <div className="velisse-tech-box-title d-flex align-items-center gap-2">
                        <FaWhatsapp className="text-success" />
                        <SiStripe style={{ color: "#635bff" }} />
                        <SiAmazonaws style={{ color: "#ff9900" }} />
                        <span>Integraciones Cloud & IA</span>
                      </div>
                      <ul className="velisse-tech-list">
                        <li><strong>WhatsApp API:</strong> Meta Cloud API para distribución automática y confirmación.</li>
                        <li><strong>Google Gemini AI:</strong> Generación asistida de estilos y plantillas con IA.</li>
                        <li><strong>Stripe & AWS S3:</strong> Pasarela de pago de suscripciones y almacenamiento multimedia.</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Section 3: Engineering Challenges Overcome */}
              <div className="velisse-info-block mb-3">
                <h5 className="velisse-section-heading">
                  <span className="velisse-gold">🏆</span> Desafíos Técnicos Superados
                </h5>
                <div className="velisse-challenges-list">
                  <div className="velisse-challenge-item">
                    <FaCheckCircle className="velisse-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Generación de pases sin saturar servidor:</strong> Renderizado masivo de pases gráficos con tipografías web y QR en cliente mediante <code>html2canvas</code> y compresión asíncrona en <code>JSZip</code>.
                    </div>
                  </div>
                  <div className="velisse-challenge-item">
                    <FaCheckCircle className="velisse-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Escaneo QR fluido cross-browser en móviles:</strong> Integración de cámara en navegador con <code>html5-qrcode</code> con framerates adaptativos para recepción en puerta, con fallback manual.
                    </div>
                  </div>
                  <div className="velisse-challenge-item">
                    <FaCheckCircle className="velisse-gold mt-1 flex-shrink-0" />
                    <div>
                      <strong>Runtime universal de plantillas:</strong> Servicio desacoplado (<code>UniversalInvitationRuntime</code>) que normaliza inyección de datos, audio de fondo y validaciones en más de 20 diseños.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Architecture Highlights Badges */}
              <div className="d-flex flex-wrap gap-2 pt-2 border-top border-secondary">
                <span className="velisse-pill-feature"><FaExternalLinkAlt className="me-1" /> 3 Demos Web en Vivo</span>
                <span className="velisse-pill-feature"><FaChair className="me-1" /> Seating Chart Visual</span>
                <span className="velisse-pill-feature"><FaQrcode className="me-1" /> Check-in Staff Web</span>
                <span className="velisse-pill-feature"><FaWhatsapp className="me-1" /> WhatsApp RSVP</span>
                <span className="velisse-pill-feature"><FaMusic className="me-1" /> Portal DJ en Vivo</span>
                <span className="velisse-pill-feature"><FaRobot className="me-1" /> Generador con Gemini IA</span>
              </div>
            </Col>
          </Row>
        </div>

        {/* Modal Footer */}
        <div className="velisse-modal-footer p-3 px-4 d-flex justify-content-between align-items-center">
          <span className="small text-muted d-flex align-items-center gap-1">
            <span className="velisse-status-dot"></span> Proyecto Local / Privado para Cliente • Demostración interactiva en portafolio
          </span>
          <Button variant="secondary" onClick={onHide} className="velisse-close-action-btn">
            Cerrar Presentación
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default VelisseModal;
