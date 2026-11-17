import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import {
  FaGraduationCap,
  FaGlobeAmericas,
  FaBriefcase,
  FaLanguage,
  FaCheckCircle,
  FaCertificate,
  FaTerminal,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import cvPdf from "../../Assets/Jesus_Adiv_Barroso_CV.pdf";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <div className="section-header-wrap text-center mb-5">
            <span className="section-eyebrow">
              PERFIL PROFESIONAL • EDUCACIÓN, EXPERIENCIA & STACK
            </span>
            <h1 className="section-main-title mt-2">
              Conoce quién <span className="text-gradient-brand">Soy</span> y mi
              Respaldo en Ingeniería
            </h1>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "780px" }}>
              Ingeniero en Ciencias de la Computación (BUAP) y Técnico en Programación (CBTIS 260) con experiencia práctica en desarrollo Web, Móvil, PWA, Inteligencia Artificial, Ciencia de Datos, Cloud AWS y mantenimiento de software.
            </p>
          </div>

          <Row className="g-4 align-items-stretch mb-5">
            <Col lg={7}>
              <Aboutcard />
            </Col>

            <Col lg={5}>
              <div className="profile-quick-facts-card h-100 p-4 text-start d-flex flex-column justify-content-between">
                <div>
                  {/* Executive Header without Photo */}
                  <div className="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom border-secondary">
                    <div className="brand-monogram-box" style={{ width: "56px", height: "56px", fontSize: "1.1rem" }}>
                      <FaTerminal className="brand-monogram-icon" />
                      <span>JA</span>
                    </div>
                    <div>
                      <span className="pitch-badge mb-1 d-inline-block">FICHA EJECUTIVA</span>
                      <h4 className="text-white fw-bold m-0" style={{ fontSize: "1.18rem" }}>
                        Jesús Adiv Barroso Manilla
                      </h4>
                      <div className="text-info small fw-semibold">
                        Ingeniero en Ciencias de la Computación & Técnico en Programación
                      </div>
                    </div>
                  </div>

                  {/* Dual Education Prominent Block */}
                  <div className="fact-item-row mb-3">
                    <div className="fact-icon-box">
                      <FaGraduationCap />
                    </div>
                    <div className="w-100">
                      <div className="text-white-50 small mb-1">Doble Titulación Académica</div>
                      <div className="p-2 rounded-3 mb-2" style={{ background: "rgba(2, 6, 23, 0.5)", border: "1px solid rgba(56, 189, 248, 0.22)" }}>
                        <div className="text-white fw-bold small">
                          Benemérita Universidad Autónoma de Puebla (BUAP)
                        </div>
                        <div className="text-info small fw-semibold">
                          Ingeniería en Ciencias de la Computación
                        </div>
                      </div>
                      <div className="p-2 rounded-3" style={{ background: "rgba(2, 6, 23, 0.5)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
                        <div className="text-white fw-bold small">
                          CBTIS 260
                        </div>
                        <div className="text-success small fw-semibold">
                          Título Técnico en Programación
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="fact-item-row mb-3">
                    <div className="fact-icon-box">
                      <FaBriefcase />
                    </div>
                    <div>
                      <div className="text-white-50 small">Trayectoria Profesional</div>
                      <div className="text-white fw-semibold small">
                        • Desarrollador Web, Móvil e IA — Kyndrasoft (2024–2026)
                      </div>
                      <div className="text-white fw-semibold small">
                        • Desarrollador Full Stack — Freelancer (2023–2024)
                      </div>
                      <div className="text-white fw-semibold small">
                        • Portal de Gestión Académica & Datos — BUAP (2023)
                      </div>
                      <div className="text-white-50 small mt-1">
                        Flutter, Angular, React, Node.js, PWA, OpenAI/Claude/Codex, SQL, Jira, Trello, Git y AWS.
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="fact-item-row mb-3">
                    <div className="fact-icon-box">
                      <FaCertificate />
                    </div>
                    <div>
                      <div className="text-white-50 small">Certificaciones Destacadas</div>
                      <div className="text-white fw-semibold small">
                        ONE — Oracle Next Education (Oracle + Alura)
                      </div>
                      <div className="text-white-50 small">
                        • <strong>Data Science con SQL</strong>, React y JavaScript<br />
                        • <strong>Flutter Avanzado</strong> (Udemy - Fernando Herrera)<br />
                        • <strong>IoT Fundamentals: Connecting Things</strong> (Cisco)<br />
                        • <strong>Git y GitHub Profesional</strong> (Alura)
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="fact-item-row mb-3">
                    <div className="fact-icon-box">
                      <FaLanguage />
                    </div>
                    <div>
                      <div className="text-white-50 small">Idiomas</div>
                      <div className="text-white fw-semibold small">
                        Español (Nativo) • Inglés (Intermedio) • Francés (Nivel inicial)
                      </div>
                    </div>
                  </div>

                  {/* Modality (No Puebla restriction) */}
                  <div className="fact-item-row mb-2">
                    <div className="fact-icon-box">
                      <FaGlobeAmericas />
                    </div>
                    <div>
                      <div className="text-white-50 small">Modalidad y Disponibilidad</div>
                      <div className="text-white fw-semibold small">
                        Remoto (Nacional / Internacional) • Híbrido • Relocalización
                      </div>
                      <div className="text-success small">
                        Disponibilidad inmediata para integrarme a equipos de ingeniería
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 d-flex flex-column gap-2">
                  <div
                    className="p-2 px-3 rounded-3"
                    style={{
                      background: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold small">
                      <FaCheckCircle />
                      <span>Ciclo completo (SDLC): planificación, código, IA, Cloud y mantenimiento.</span>
                    </div>
                  </div>
                  <a
                    href={cvPdf}
                    download="Jesus_Adiv_Barroso_CV.pdf"
                    className="hero-btn-primary text-decoration-none justify-content-center w-100"
                  >
                    <AiOutlineDownload className="me-2" /> Descargar CV Actualizado (PDF)
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5 mb-4">
            <span className="section-eyebrow">DOMINIO TÉCNICO MULTIDISCIPLINARIO</span>
            <h2 className="section-main-title mt-2">
              Tecnologías, Lenguajes, <span className="text-gradient-brand">IA & Ciencia de Datos</span>
            </h2>
          </div>
          <Techstack />

          <div className="text-center mt-5 mb-4">
            <span className="section-eyebrow">ENTORNO DE INGENIERÍA, GESTIÓN & CLOUD</span>
            <h2 className="section-main-title mt-2">
              Herramientas, <span className="text-gradient-brand">Gestión Ágil, Cloud e IA</span>
            </h2>
          </div>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
