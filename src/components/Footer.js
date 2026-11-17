import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
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
                <a
                  href="mailto:jesusadiv1@gmail.com"
                  className="footer-social-link"
                  title="Enviar correo a jesusadiv1@gmail.com"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
