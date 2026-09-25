import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaImages, FaExternalLinkAlt, FaGlassCheers } from "react-icons/fa";
import coverReal from "../../Assets/MyProyects/Velisse-Invitaciones/boda_real_cover.webp";

function VelisseCard({ onOpenModal }) {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <Card className="project-card-view velisse-card-highlight">
      {/* Featured Header Badge */}
      <div className="velisse-card-topbar d-flex justify-content-center align-items-center p-2">
        <Badge className="velisse-badge-featured">
          ⭐ SAAS EVENT TECH
        </Badge>
      </div>

      {/* Card Image with click-to-open */}
      <div
        className="velisse-card-img-wrapper"
        onClick={() => onOpenModal("royal")}
        title="Haz clic para ver el proyecto y probar las demos interactivas"
      >
        <Card.Img
          variant="top"
          src={coverReal}
          alt="Velisse Showcase"
          className="velisse-card-img"
        />
        <div className="velisse-img-hover-hint">
          <FaImages className="me-1" /> Ver Proyecto
        </div>
      </div>

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="d-flex align-items-center justify-content-center gap-2 mb-2 velisse-card-title">
            <FaGlassCheers className="velisse-gold" />
            <span>Velisse — EventPass SaaS</span>
          </Card.Title>

          {/* Tech badges strip */}
          <div className="velisse-card-tags mb-3 d-flex flex-wrap justify-content-center gap-1">
            <span className="velisse-mini-pill">Angular 13+</span>
            <span className="velisse-mini-pill">TypeScript</span>
            <span className="velisse-mini-pill">RxJS</span>
            <span className="velisse-mini-pill">GSAP</span>
            <span className="velisse-mini-pill">WhatsApp API</span>
            <span className="velisse-mini-pill">html5-qrcode</span>
            <span className="velisse-mini-pill">Stripe</span>
            <span className="velisse-mini-pill">Gemini AI</span>
            <span className="velisse-mini-pill">AWS S3</span>
          </div>

          <Card.Text style={{ textAlign: "justify", fontSize: "0.91rem", lineHeight: "1.5" }}>
            Plataforma SaaS end-to-end para gestión integral de eventos e invitaciones interactivas.
            Reemplaza las tradicionales invitaciones estáticas en PDF con plantillas web dinámicas (SPA),
            confirmación inteligente (RSVP) por WhatsApp, Seating Chart visual interactivo para distribución de mesas
            y control de accesos en puerta mediante escaneo QR en tiempo real con la cámara del navegador.
          </Card.Text>
        </div>

        {/* Action Buttons: 3 Demos First (Primary Color), then Ver Proyecto below */}
        <div className="velisse-card-buttons mt-3 d-flex flex-column gap-2">
          {/* 3 Interactive Demo Buttons carrying primary gold color */}
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
          </div>

          <Button
            href={`${publicUrl}/velisse-demos/story-vertical.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="velisse-demo-main-btn w-100"
            title="Abrir demo interactiva Story Vertical en nueva pestaña"
          >
            <FaExternalLinkAlt className="me-1" /> Demo Story
          </Button>

          {/* Ver Proyecto button placed below */}
          <Button
            onClick={() => onOpenModal("royal")}
            className="velisse-ver-proyecto-btn w-100 mt-1"
          >
            <FaImages className="me-1" /> Ver Proyecto
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VelisseCard;
