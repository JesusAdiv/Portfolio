import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { FaGooglePlay, FaImages, FaDumbbell } from "react-icons/fa";
import coverWeb from "../../Assets/MyProyects/AllFitness/Portadaweb.png";
import coverMobile from "../../Assets/MyProyects/AllFitness/CoverPlaystore.webp";

function AllFitnessCard({ onOpenModal }) {
  const [currentImg, setCurrentImg] = useState("web");

  return (
    <Card className="project-card-view allfitness-card-highlight">
      {/* Featured Header Badge */}
      <div className="allfitness-card-topbar d-flex justify-content-between align-items-center p-2">
        <Badge bg="warning" text="dark" className="allfitness-badge-featured">
          ⭐ PROYECTO DESTACADO
        </Badge>
        <div className="allfitness-img-switcher d-flex gap-1">
          <button
            type="button"
            className={`allfitness-switcher-btn ${currentImg === "web" ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImg("web");
            }}
            title="Ver vista Web SaaS"
          >
            Web
          </button>
          <button
            type="button"
            className={`allfitness-switcher-btn ${currentImg === "mobile" ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImg("mobile");
            }}
            title="Ver vista App Móvil"
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Card Image with click-to-open */}
      <div
        className="allfitness-card-img-wrapper"
        onClick={onOpenModal}
        title="Haz clic para abrir la presentación interactiva"
      >
        <Card.Img
          variant="top"
          src={currentImg === "web" ? coverWeb : coverMobile}
          alt="AllFitness Showcase"
          className="allfitness-card-img"
        />
        <div className="allfitness-img-hover-hint">
          <FaImages className="me-1" /> Ver Galería
        </div>
      </div>

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <FaDumbbell className="purple" />
            <span>AllFitness — Ecosistema Digital</span>
          </Card.Title>

          {/* Tech badges strip */}
          <div className="allfitness-card-tags mb-3 d-flex flex-wrap justify-content-center gap-1">
            <span className="allfitness-mini-pill">Angular 13</span>
            <span className="allfitness-mini-pill">Flutter</span>
            <span className="allfitness-mini-pill">Node.js</span>
            <span className="allfitness-mini-pill">MongoDB</span>
            <span className="allfitness-mini-pill">OpenAI IA</span>
            <span className="allfitness-mini-pill">WASM QR</span>
            <span className="allfitness-mini-pill">AWS S3</span>
          </div>

          <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem" }}>
            Plataforma SaaS multi-tenant y aplicación móvil offline-first para digitalización de
            gimnasios y seguimiento de atletas. Integra panel web con control de aforo y lector QR en
            WebAssembly, app móvil con tracker en vivo de 1RM y heatmap muscular, y backend cloud
            con generación inteligente de rutinas vía OpenAI.
          </Card.Text>
        </div>

        {/* Action Buttons */}
        <div className="allfitness-card-buttons mt-3 d-flex flex-column gap-2">
          <Button
            variant="primary"
            onClick={() => onOpenModal(false)}
            className="allfitness-main-btn"
          >
            <FaImages className="me-1" /> Ver Galería
          </Button>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Button
              variant="outline-light"
              href="https://www.allfitness.com.mx/#/home"
              target="_blank"
              rel="noopener noreferrer"
              className="allfitness-secondary-btn flex-fill"
            >
              <CgWebsite className="me-1" /> Web SaaS
            </Button>
            <Button
              variant="outline-light"
              href="https://play.google.com/store/apps/details?id=com.kyndrasoft.allfitness&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="allfitness-secondary-btn flex-fill"
            >
              <FaGooglePlay className="me-1" /> Google Play
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AllFitnessCard;
