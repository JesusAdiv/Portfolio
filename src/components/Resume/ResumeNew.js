import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Jesus_Adiv_Barroso_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
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
              Ingeniero en Ciencias de la Computación (BUAP) & Técnico en Programación (CBTIS 260) • Desarrollo de Software, Web, Móvil, IA y Ciencia de Datos.
            </p>
          </div>

          <Row className="justify-content-center mb-4 position-relative">
            <Button
              variant="primary"
              href={pdf}
              download="Jesus_Adiv_Barroso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{ maxWidth: "280px", justifyContent: "center" }}
            >
              <AiOutlineDownload className="me-2" />
              Descargar CV en PDF
            </Button>
          </Row>

          <Row className="resume justify-content-center">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.58} />
            </Document>
          </Row>

          <Row className="justify-content-center mt-4 mb-3 position-relative">
            <Button
              variant="primary"
              href={pdf}
              download="Jesus_Adiv_Barroso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{ maxWidth: "280px", justifyContent: "center" }}
            >
              <AiOutlineDownload className="me-2" />
              Descargar CV en PDF
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
