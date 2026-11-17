import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiGithub,
  SiJira,
  SiTrello,
  SiOpenai,
  SiAmazonaws,
} from "react-icons/si";
import { FaRobot, FaTools, FaSyncAlt, FaTerminal } from "react-icons/fa";

import vsCode from "../../Assets/TechIcons/vscode.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Control de Versiones & Gestión Ágil */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"22px"} />
        <div className="tech-icons-text">GitHub & PRs</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJira fontSize={"22px"} style={{ color: "#2684ff" }} />
        <div className="tech-icons-text">Jira Software</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTrello fontSize={"22px"} style={{ color: "#0079bf" }} />
        <div className="tech-icons-text">Trello</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaSyncAlt fontSize={"20px"} className="text-success" />
        <div className="tech-icons-text">Scrum / Agile</div>
      </Col>

      {/* Herramientas de IA & Asistentes de Ingeniería */}
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot fontSize={"22px"} style={{ color: "#d97757" }} />
        <div className="tech-icons-text">Claude / Claude Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"22px"} className="text-success" />
        <div className="tech-icons-text">OpenAI Codex</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal fontSize={"20px"} className="text-info" />
        <div className="tech-icons-text">GitHub Copilot</div>
      </Col>

      {/* Cloud, Entorno, Testing & Mantenimiento */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws fontSize={"22px"} className="text-warning" />
        <div className="tech-icons-text">AWS CloudFront & S3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"22px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Chrome DevTools</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaTools fontSize={"20px"} className="text-warning" />
        <div className="tech-icons-text">Mantenimiento & Refactor</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
