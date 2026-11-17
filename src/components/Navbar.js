import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn, FaBolt, FaPaperPlane, FaTerminal } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleSectionNav = (e, sectionId) => {
    e.preventDefault();
    updateExpanded(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="d-flex align-items-center justify-content-between flex-nowrap">
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2 brand-logo-wrap"
          onClick={() => {
            updateExpanded(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="brand-monogram-box" aria-hidden="true">
            <FaTerminal className="brand-monogram-icon" />
            <span>JA</span>
          </div>
          <div className="d-flex flex-column text-start">
            <div className="d-flex align-items-center gap-2">
              <span className="brand-name-text">Jesús Adiv Barroso</span>
              <span
                className="brand-status-pill d-none d-sm-inline-flex"
                title="Disponible para contratación inmediata (Remoto / Híbrido)"
              >
                <span className="brand-status-dot"></span> Disponible
              </span>
            </div>
            <span className="brand-role-sub d-none d-md-block">
              Ing. Ciencias de la Computación • Web, Mobile, IA & Datos
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active-nav-link" : ""}
                onClick={() => {
                  updateExpanded(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <AiOutlineHome className="me-1" /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                className={
                  location.pathname === "/projects" || location.pathname === "/project"
                    ? "active-nav-link"
                    : ""
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="me-1" /> Proyectos (7)
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/trayectoria"
                className={
                  location.pathname === "/trayectoria" || location.pathname === "/soluciones"
                    ? "active-nav-link"
                    : ""
                }
                onClick={() => updateExpanded(false)}
              >
                <FaBolt className="me-1 text-info" /> Soluciones & Trayectoria
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active-nav-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser className="me-1" /> Perfil & Stack
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={location.pathname === "/resume" ? "active-nav-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument className="me-1" /> CV
              </Nav.Link>
            </Nav.Item>

            <div className="nav-actions-group d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://github.com/JesusAdiv"
                target="_blank"
                rel="noreferrer"
                className="nav-icon-btn"
                title="GitHub de Jesús Adiv"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jesus-adiv-barroso-manilla-9544a72a4/"
                target="_blank"
                rel="noreferrer"
                className="nav-icon-btn"
                title="LinkedIn de Jesús Adiv Barroso Manilla"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleSectionNav(e, "contacto")}
                className="nav-hire-cta"
              >
                <FaPaperPlane className="me-1" /> Contactar
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
