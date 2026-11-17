import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsInstagram } from "react-icons/bs";
import {
  FaCheckCircle,
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaPlay,
} from "react-icons/fa";

function ProjectCards(props) {
  const [showTech, setShowTech] = useState(false);

  return (
    <Card className={`project-card-view ${props.featuredClass || ""}`}>
      {/* Top Status & Category Bar */}
      <div className="project-card-topbar d-flex justify-content-between align-items-center px-3 py-2">
        <span className="project-category-badge">
          {props.category || "PROYECTO REAL"}
        </span>
        {props.statusBadge && (
          <span className="project-status-pill">
            <span className="status-dot-live"></span>
            {props.statusBadge}
          </span>
        )}
      </div>

      {/* Visual Cover / Image Container */}
      {props.customVisual ? (
        <div className="project-card-custom-visual">
          {props.customVisual}
        </div>
      ) : (
        props.imgPath && (
          <div className="project-card-img-container">
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt={props.title}
              className={props.imgClassName || ""}
            />
          </div>
        )
      )}

      <Card.Body className="d-flex flex-column justify-content-between p-4">
        <div>
          <Card.Title className="project-card-modern-title mb-2">
            {props.title}
          </Card.Title>

          {/* 1-Sentence Human-Friendly Summary */}
          <p className="project-card-summary mb-3">
            {props.description}
          </p>

          {/* 3 Scannable Impact Bullets */}
          {props.highlights && props.highlights.length > 0 && (
            <ul className="project-impact-list mb-3">
              {props.highlights.map((item, idx) => (
                <li key={idx} className="project-impact-item">
                  <FaCheckCircle className="impact-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Clean Tech Stack Pills */}
          {props.tags && props.tags.length > 0 && (
            <div className="project-tags-wrap d-flex flex-wrap gap-1 mb-3">
              {props.tags.map((tag, i) => (
                <span key={i} className="project-modern-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Deep Expandable Technical Architecture Drawer */}
          {(props.techSpecs || props.techDetails) && (
            <div className="project-tech-drawer-wrap mb-2">
              <button
                type="button"
                className="project-tech-toggle-btn"
                onClick={() => setShowTech(!showTech)}
              >
                <FaCode className="me-1 text-info" />
                <span>
                  {showTech
                    ? "Ocultar arquitectura técnica"
                    : "Ver arquitectura técnica detallada"}
                </span>
                {showTech ? (
                  <FaChevronUp className="ms-auto" />
                ) : (
                  <FaChevronDown className="ms-auto" />
                )}
              </button>
              {showTech && (
                <div className="project-tech-drawer-body mt-2">
                  {props.techSpecs && props.techSpecs.length > 0 ? (
                    props.techSpecs.map((spec, idx) => (
                      <div key={idx} className="tech-spec-row">
                        <span className="tech-spec-label">{spec.label}:</span>
                        <span className="tech-spec-val">{spec.value}</span>
                      </div>
                    ))
                  ) : (
                    <div>{props.techDetails}</div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="project-card-actions mt-3 pt-2 d-flex justify-content-center gap-2 flex-wrap">
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-primary flex-fill d-flex align-items-center justify-content-center gap-1"
            >
              <FaPlay size={10} /> {props.demoLabel || "Probar Demo Interactiva"}
            </Button>
          )}

          {props.prodLink && (
            <Button
              variant="outline-light"
              href={props.prodLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-outline flex-fill d-flex align-items-center justify-content-center gap-1"
              title={props.prodTitle || "Abrir despliegue en producción"}
            >
              <CgWebsite className="me-1 text-info" />
              {props.prodLabel || "Link Producción"}
              <FaExternalLinkAlt size={10} className="ms-1" />
            </Button>
          )}

          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-outline flex-fill"
            >
              <BsGithub className="me-1" />
              {props.isBlog ? "Blog" : "Ver Código (GitHub)"}
            </Button>
          )}

          {props.instaLink && (
            <Button
              variant="primary"
              href={props.instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-insta flex-fill d-flex align-items-center justify-content-center"
            >
              <BsInstagram className="me-1" /> Ver Tienda / Marca
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
