import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import {
  FaGooglePlay,
  FaImages,
  FaDumbbell,
  FaCheckCircle,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaMobileAlt,
  FaExternalLinkAlt,
  FaTimes,
  FaRedo,
} from "react-icons/fa";
import coverWeb from "../../Assets/MyProyects/AllFitness/Portadaweb.png";

function AllFitnessCard({ onOpenModal }) {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [showTech, setShowTech] = useState(false);
  const [showPhoneSimulator, setShowPhoneSimulator] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <>
      <Card className="project-card-view allfitness-card-highlight">
        {/* Featured Header Badge */}
        <div className="allfitness-card-topbar d-flex justify-content-between align-items-center px-3 py-2">
          <Badge className="allfitness-badge-featured">
            🚀 EN PRODUCCIÓN • GOOGLE PLAY & WEB SAAS
          </Badge>
          <span className="project-status-pill">
            <span className="status-dot-live"></span> Flutter Live App
          </span>
        </div>

        {/* Card Image with click-to-open live Flutter simulator */}
        <div
          className="allfitness-card-img-wrapper"
          onClick={() => setShowPhoneSimulator(true)}
          title="Haz clic para probar la App Móvil de Flutter en vivo"
        >
          <Card.Img
            variant="top"
            src={coverWeb}
            alt="AllFitness Showcase"
            className="allfitness-card-img"
          />
          <div className="allfitness-img-hover-hint">
            <FaMobileAlt className="me-1" /> Probar App Flutter en Vivo
          </div>
        </div>

        <Card.Body className="d-flex flex-column justify-content-between p-4">
          <div>
            <Card.Title className="project-card-modern-title d-flex align-items-center gap-2 mb-2">
              <FaDumbbell className="text-info flex-shrink-0" />
              <span>AllFitness — Ecosistema SaaS & App en Google Play</span>
            </Card.Title>

            {/* 1-Sentence Clear Value Proposition */}
            <p className="project-card-summary mb-3">
              Plataforma integral multi-gimnasio (Web SaaS + App nativa en Flutter publicada en Google Play) para administrar socios, accesos QR y entrenamiento con IA.
            </p>

            {/* 3 Scannable Impact Bullets */}
            <ul className="project-impact-list mb-3">
              <li className="project-impact-item">
                <FaCheckCircle className="impact-check-icon" />
                <span>
                  <strong>App en Google Play (Offline-First):</strong> registro de series, cálculo de 1RM en vivo y sincronización SQLite sin internet.
                </span>
              </li>
              <li className="project-impact-item">
                <FaCheckCircle className="impact-check-icon" />
                <span>
                  <strong>Web SaaS Multi-Tenant:</strong> control de membresías, analíticas y lector QR en navegador acelerado con WebAssembly (60 FPS).
                </span>
              </li>
              <li className="project-impact-item">
                <FaCheckCircle className="impact-check-icon" />
                <span>
                  <strong>Motor IA con OpenAI & Heatmap Muscular:</strong> generación determinista de rutinas JSON y mapa anatómico interactivo.
                </span>
              </li>
            </ul>

            {/* Clean Tech Stack Pills */}
            <div className="allfitness-card-tags mb-3 d-flex flex-wrap gap-1">
              <span className="project-modern-pill">Flutter & Dart</span>
              <span className="project-modern-pill">Riverpod & SQLite</span>
              <span className="project-modern-pill">Angular 13 & RxJS</span>
              <span className="project-modern-pill">Node.js & Express</span>
              <span className="project-modern-pill">MongoDB</span>
              <span className="project-modern-pill">OpenAI API</span>
              <span className="project-modern-pill">WebAssembly QR</span>
              <span className="project-modern-pill">AWS S3</span>
            </div>

            {/* Deep Technical Architecture Drawer */}
            <div className="project-tech-drawer-wrap mb-2">
              <button
                type="button"
                className="project-tech-toggle-btn"
                onClick={() => setShowTech(!showTech)}
              >
                <FaCode className="me-1 text-info" />
                <span>
                  {showTech ? "Ocultar arquitectura técnica" : "Ver arquitectura técnica detallada"}
                </span>
                {showTech ? <FaChevronUp className="ms-auto" /> : <FaChevronDown className="ms-auto" />}
              </button>
              {showTech && (
                <div className="project-tech-drawer-body mt-2">
                  <div className="tech-spec-row">
                    <span className="tech-spec-label">Patrón & Arquitectura:</span>
                    <span className="tech-spec-val">
                      SaaS Multi-Tenant con aislamiento por <code>gymId</code> + App Móvil Clean Architecture (Offline-First).
                    </span>
                  </div>
                  <div className="tech-spec-row">
                    <span className="tech-spec-label">Frontend Web SaaS:</span>
                    <span className="tech-spec-val">
                      Angular 13, TypeScript, RxJS (<code>BehaviorSubject</code>), Route Guards (<code>GymExistGuard</code>), Chart.js, FullCalendar v6 y decodificador QR en cámara web con <code>ngx-scanner-qrcode</code> (WASM a 60 FPS).
                    </span>
                  </div>
                  <div className="tech-spec-row">
                    <span className="tech-spec-label">App Móvil (iOS / Android):</span>
                    <span className="tech-spec-val">
                      Flutter & Dart, gestión de estado reactivo con <code>Riverpod</code>, motor <code>SincronizadorOffline</code> sobre SQLite + <code>SharedPreferences</code> con cola idempotente, <code>WorkManager</code> (isolates en 2do plano) y fork propio de <code>muscle_selector</code> (CustomPainter SVG).
                    </span>
                  </div>
                  <div className="tech-spec-row">
                    <span className="tech-spec-label">Backend, Cloud & IA:</span>
                    <span className="tech-spec-val">
                      Node.js, Express, API RESTful, MongoDB (Mongoose), autenticación JWT + RBAC + Bcrypt, integración OpenAI API con validación rígida de JSON Schema (sin alucinaciones), almacenamiento multimedia en AWS S3 y proceso PM2.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="allfitness-card-buttons mt-3 pt-2 d-flex flex-column gap-2">
            <div className="d-flex gap-2">
              <Button
                type="button"
                onClick={() => setShowPhoneSimulator(true)}
                className="allfitness-main-btn flex-fill d-flex align-items-center justify-content-center gap-2"
              >
                <FaMobileAlt /> Probar App Móvil (Flutter en Vivo)
              </Button>
              <Button
                href={`${publicUrl}/allfitness-mobile/simulator.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="allfitness-secondary-btn d-flex align-items-center justify-content-center px-3"
                title="Abrir App Flutter en nueva pestaña"
              >
                <FaExternalLinkAlt />
              </Button>
            </div>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Button
                variant="outline-light"
                onClick={() => onOpenModal(false)}
                className="allfitness-secondary-btn flex-fill"
              >
                <FaImages className="me-1 text-info" /> Galería (11)
              </Button>
              <Button
                variant="outline-light"
                href="https://www.allfitness.com.mx/#/home"
                target="_blank"
                rel="noopener noreferrer"
                className="allfitness-secondary-btn flex-fill"
              >
                <CgWebsite className="me-1" /> Web Prod
              </Button>
              <Button
                variant="outline-light"
                href="https://play.google.com/store/apps/details?id=com.kyndrasoft.allfitness&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="allfitness-secondary-btn flex-fill"
              >
                <FaGooglePlay className="me-1 text-success" /> Play Store
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Embedded Phone Mockup Modal for the Compiled Flutter Web App */}
      <Modal
        show={showPhoneSimulator}
        onHide={() => setShowPhoneSimulator(false)}
        centered
        size="lg"
        contentClassName="allfitness-modal-content"
      >
        <Modal.Header className="allfitness-modal-header border-0 py-3 px-4 d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="allfitness-status-badge">
                <FaMobileAlt className="me-1" /> FLUTTER LIVE DEMO
              </span>
              <span className="text-white fw-bold">AllFitness Mobile App (100% Código Real Flutter)</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Button
              size="sm"
              variant="outline-light"
              onClick={() => setIframeKey((k) => k + 1)}
              className="allfitness-secondary-btn"
              title="Reiniciar App"
            >
              <FaRedo className="me-1" /> Reiniciar
            </Button>
            <Button
              size="sm"
              href={`${publicUrl}/allfitness-mobile/simulator.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="allfitness-secondary-btn"
              title="Abrir en nueva pestaña"
            >
              <FaExternalLinkAlt className="me-1" /> Nueva Pestaña
            </Button>
            <button
              type="button"
              className="allfitness-close-btn position-static"
              onClick={() => setShowPhoneSimulator(false)}
              aria-label="Cerrar simulador"
            >
              <FaTimes />
            </button>
          </div>
        </Modal.Header>

        <Modal.Body className="p-3 d-flex flex-column align-items-center justify-content-center" style={{ background: "#060911" }}>
          <div
            style={{
              width: "390px",
              maxWidth: "100%",
              height: "844px",
              maxHeight: "calc(90vh - 90px)",
              border: "12px solid #1e1e1e",
              borderRadius: "44px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              margin: "0 auto",
              background: "#000",
            }}
          >
            <iframe
              key={iframeKey}
              src={`${publicUrl}/allfitness-mobile/index.html?v=2`}
              style={{ width: "100%", height: "100%", border: "none" }}
              title="AllFitness Flutter Live Demo"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AllFitnessCard;
