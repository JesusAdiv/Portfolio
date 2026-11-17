import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {
  FaExternalLinkAlt,
  FaGlassCheers,
  FaCheckCircle,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaPlay,
} from "react-icons/fa";
import velisseLogo from "../../Assets/MyProyects/Velisse-Invitaciones/logo.png";

function VelisseCard() {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="project-card-view velisse-card-highlight">
      {/* Featured Header Badge with PWA Highlight */}
      <div className="velisse-card-topbar d-flex justify-content-between align-items-center px-3 py-2">
        <Badge className="velisse-badge-featured" title="SAAS EVENT TECH & PWA • DEMOS EN VIVO">
          ✨ SAAS & PWA • EVENT TECH
        </Badge>
        <span className="project-status-pill">
          <span className="status-dot-live"></span> PWA Instalable
        </span>
      </div>

      {/* Card Logo with click-to-open live demo */}
      <div
        className="velisse-card-img-wrapper"
        onClick={() => window.open(`${publicUrl}/proyectos/velisse-app/index.html`, "_blank")}
        title="Haz clic para probar la plataforma completa de Velisse en vivo"
      >
        <Card.Img
          variant="top"
          src={velisseLogo}
          alt="Velisse Logo"
          className="velisse-card-img"
        />
        <div className="velisse-img-hover-hint">
          ⚡ Probar App Velisse en Vivo
        </div>
      </div>

      <Card.Body className="d-flex flex-column justify-content-between p-4">
        <div>
          <Card.Title className="project-card-modern-title d-flex align-items-center gap-2 mb-2">
            <FaGlassCheers className="velisse-gold flex-shrink-0" />
            <span>Velisse — Plataforma SaaS de Eventos & PWA</span>
          </Card.Title>

          {/* 1-Sentence Clear Value Proposition */}
          <p className="project-card-summary mb-3">
            Ecosistema SaaS y <strong>Progressive Web App (PWA)</strong> que transforma invitaciones estáticas en experiencias interactivas con pases QR offline, mapa de mesas y RSVP en WhatsApp.
          </p>

            {/* Option: Ver más (Puntos verdes, Chips y Arquitectura) */}
            <div className="project-tech-drawer-wrap mb-2">
              <button
                type="button"
                className="project-tech-toggle-btn"
                onClick={() => setShowMore(!showMore)}
              >
                <FaCode className="me-1 text-info" />
                <span>
                  {showMore
                    ? "Ver menos"
                    : "Ver más (Stack, detalles y arquitectura)"}
                </span>
                {showMore ? (
                  <FaChevronUp className="ms-auto" />
                ) : (
                  <FaChevronDown className="ms-auto" />
                )}
              </button>

              {showMore && (
                <div className="project-details-expanded mt-3">
                  {/* Puntos en verde (Impact Bullets) */}
                  <ul className="project-impact-list mb-3">
                    <li className="project-impact-item">
                      <FaCheckCircle className="impact-check-icon" />
                      <span>
                        <strong>Arquitectura PWA Instalable:</strong> acceso instantáneo con Service Workers, caché de boletos QR sin internet y experiencia nativa móvil.
                      </span>
                    </li>
                    <li className="project-impact-item">
                      <FaCheckCircle className="impact-check-icon" />
                      <span>
                        <strong>Confirmación WhatsApp 1-Clic & Seating Chart:</strong> asignación visual de mesas y escáner QR en puerta desde el navegador.
                      </span>
                    </li>
                    <li className="project-impact-item">
                      <FaCheckCircle className="impact-check-icon" />
                      <span>
                        <strong>Motor de Plantillas + IA (Gemini):</strong> animaciones GSAP de alta costura, música inmersiva y modo Stories vertical.
                      </span>
                    </li>
                  </ul>

                  {/* Chips (Clean Tech Stack Pills) */}
                  <div className="velisse-card-tags mb-3 d-flex flex-wrap gap-1">
                    <span className="project-modern-pill">Angular 13+</span>
                    <span className="project-modern-pill">PWA & Service Workers</span>
                    <span className="project-modern-pill">TypeScript & RxJS</span>
                    <span className="project-modern-pill">GSAP & AOS</span>
                    <span className="project-modern-pill">WhatsApp Cloud API</span>
                    <span className="project-modern-pill">HTML5 QR & Canvas</span>
                    <span className="project-modern-pill">Stripe</span>
                    <span className="project-modern-pill">Gemini IA</span>
                  </div>

                  {/* Arquitectura Técnica Detallada */}
                  <div className="project-tech-drawer-body mt-2">
                    <div className="text-info fw-bold small mb-2 d-flex align-items-center gap-1">
                      <FaCode /> Arquitectura Técnica:
                    </div>
                    <div className="tech-spec-row">
                      <span className="tech-spec-label">Patrón & Runtime:</span>
                      <span className="tech-spec-val">
                        Single Page Application (SPA) + <strong>Progressive Web App (PWA)</strong> gobernada por <code>UniversalInvitationRuntime</code> para inyectar datos, audio y temas en +20 plantillas.
                      </span>
                    </div>
                    <div className="tech-spec-row">
                      <span className="tech-spec-label">Frontend, PWA & UI:</span>
                      <span className="tech-spec-val">
                        Angular 13+, TypeScript, RxJS (<code>Observables</code> / <code>BehaviorSubject</code>), Web App Manifest & Service Workers (caché local de pases e imágenes), animaciones con GSAP, AOS y <code>canvas-confetti</code>.
                      </span>
                    </div>
                    <div className="tech-spec-row">
                      <span className="tech-spec-label">Motores Cliente & QR:</span>
                      <span className="tech-spec-val">
                        Renderizado masivo de pases gráficos con QR en el navegador mediante <code>html2canvas</code> + empaquetado asíncrono en <code>JSZip</code> (cero carga en servidor), y escáner en recepción con <code>html5-qrcode</code>.
                      </span>
                    </div>
                    <div className="tech-spec-row">
                      <span className="tech-spec-label">Cloud, Pagos & IA:</span>
                      <span className="tech-spec-val">
                        Integración con Google Gemini AI para generación asistida de diseño, WhatsApp Cloud API para envíos y confirmaciones, pasarela Stripe y almacenamiento en AWS S3.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
        </div>

        {/* Direct Demo Sections Buttons */}
        <div className="velisse-card-buttons mt-3 pt-2 d-flex flex-column gap-2">
          {/* Main Angular SaaS App Button */}
          <Button
            href={`${publicUrl}/proyectos/velisse-app/index.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
            title="Abrir plataforma completa de Velisse con catálogo, creador visual y gestión"
          >
            <FaPlay size={10} /> Probar Plataforma Completa (SaaS Velisse)
          </Button>

          <div className="text-white-50 mt-1" style={{ fontSize: "0.73rem", fontWeight: 600 }}>
            EXPLORAR EXPERIENCIAS DE INVITACIÓN EN VIVO:
          </div>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Button
              href={`${publicUrl}/velisse-demos/royal-cinematic.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="velisse-demo-main-btn flex-fill"
              title="Abrir demo interactiva Royal Cinematic en nueva pestaña"
            >
              <FaExternalLinkAlt className="me-1" /> Demo Royal
            </Button>
            <Button
              href={`${publicUrl}/velisse-demos/la-maison-doree.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="velisse-demo-main-btn flex-fill"
              title="Abrir demo interactiva La Maison Dorée en nueva pestaña"
            >
              <FaExternalLinkAlt className="me-1" /> Demo Maison
            </Button>
            <Button
              href={`${publicUrl}/velisse-demos/story-vertical.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="velisse-demo-main-btn flex-fill"
              title="Abrir demo interactiva Story Vertical en nueva pestaña"
            >
              <FaExternalLinkAlt className="me-1" /> Demo Story
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VelisseCard;
