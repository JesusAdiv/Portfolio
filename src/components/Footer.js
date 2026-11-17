import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaCheck } from "react-icons/fa";

function Footer() {
  const [copied, setCopied] = useState(false);
  let date = new Date();
  let year = date.getFullYear();

  const handleCopyEmail = () => {
    const email = "jesusadiv1@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <Container fluid className="footer">
        <Container>
          <Row className="align-items-center py-2">
            <Col md="5" className="footer-copywright text-md-start">
              <h3 className="m-0">
                <strong>Jesús Adiv Barroso Manilla</strong> — Ing. en Ciencias de la Computación
              </h3>
            </Col>
            <Col md="4" className="footer-copywright">
              <h3 className="m-0 text-white-50">
                © {year} • Software, Web, Mobile, IA & Ciencia de Datos
              </h3>
            </Col>
            <Col md="3" className="footer-body text-md-end">
              <ul className="footer-icons m-0 d-inline-flex align-items-center gap-3">
                <li className="social-icons p-0">
                  <a
                    href="https://github.com/JesusAdiv"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons p-0">
                  <a
                    href="https://www.linkedin.com/in/jesus-adiv-barroso-manilla-9544a72a4/"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons p-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="footer-social-link"
                    title="Copiar correo: jesusadiv1@gmail.com"
                    style={{
                      cursor: "pointer",
                      background: copied ? "rgba(16, 185, 129, 0.2)" : undefined,
                      borderColor: copied ? "#10b981" : undefined,
                    }}
                  >
                    {copied ? <FaCheck style={{ color: "#10b981" }} /> : <FaEnvelope />}
                  </button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Floating Toast Notification when copying email from footer */}
      {copied && (
        <div className="copy-toast-notification" role="status" aria-live="polite">
          <div
            style={{
              background: "rgba(16, 185, 129, 0.2)",
              color: "#10b981",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              flexShrink: 0,
            }}
          >
            <FaCheck />
          </div>
          <div className="text-start pe-2">
            <div className="fw-bold text-white" style={{ fontSize: "0.9rem" }}>
              ¡Correo copiado al portapapeles!
            </div>
            <div className="text-info small" style={{ fontSize: "0.8rem" }}>
              jesusadiv1@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
