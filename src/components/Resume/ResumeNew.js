import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Jesus_Adiv_Barroso_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <div className="section-header-wrap text-center mb-4">
            <span className="section-eyebrow">CURRÍCULUM VITAE ACTUALIZADO</span>
            <h1 className="section-main-title mt-2">
              CV Profesional — <span className="text-gradient-brand">Jesús Adiv Barroso</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Ingeniero en Ciencias de la Computación (BUAP) • Desarrollo de Software, Web, Móvil, IA y Ciencia de Datos.
            </p>
          </div>

          <Row className="justify-content-center gap-2 mb-4 position-relative">
            <Button
              variant="primary"
              href={pdf}
              download="Jesus_Adiv_Barroso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{ maxWidth: "260px", justifyContent: "center" }}
            >
              <AiOutlineDownload className="me-2" />
              Descargar CV en PDF
            </Button>
            <Button
              variant="secondary"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary text-decoration-none"
              style={{ maxWidth: "240px", justifyContent: "center" }}
            >
              <FaExternalLinkAlt className="me-2 text-info" />
              Abrir PDF Completo
            </Button>
          </Row>

          <Row className="resume justify-content-center">
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              loading={<div className="text-white-50 p-4">Cargando visualizador del CV...</div>}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.58} renderTextLayer={false} />
            </Document>
          </Row>

          <Row className="justify-content-center gap-2 mt-4 mb-3 position-relative">
            <Button
              variant="primary"
              href={pdf}
              download="Jesus_Adiv_Barroso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{ maxWidth: "260px", justifyContent: "center" }}
            >
              <AiOutlineDownload className="me-2" />
              Descargar CV en PDF
            </Button>
            <Button
              variant="secondary"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary text-decoration-none"
              style={{ maxWidth: "240px", justifyContent: "center" }}
            >
              <FaExternalLinkAlt className="me-2 text-info" />
              Abrir PDF Completo
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
