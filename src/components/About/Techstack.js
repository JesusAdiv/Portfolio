import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAngular,
  SiFlutter,
  SiDart,
  SiLaravel,
  SiPhp,
  SiExpress,
  SiMysql,
  SiOpenai,
  SiAmazonaws,
  SiPwa,
  SiSqlite,
  SiReactivex,
} from "react-icons/si";
import { FaBrain, FaChartBar } from "react-icons/fa";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {/* Lenguajes, Web, Mobile & PWA */}
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={ReactIcon} alt="React" className="tech-icon-images" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiAngular fontSize={"22px"} className="text-danger" />
        <div className="tech-icons-text">Angular</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" className="tech-icon-images" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Javascript} alt="Javascript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript (ES6+)</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiFlutter fontSize={"22px"} className="text-info" />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiDart fontSize={"22px"} className="text-info" />
        <div className="tech-icons-text">Dart</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiPwa fontSize={"24px"} style={{ color: "#38bdf8" }} />
        <div className="tech-icons-text">PWA (Service Workers)</div>
      </Col>

      {/* Backend, APIs & Estado Reactivo */}
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiExpress fontSize={"22px"} />
        <div className="tech-icons-text">Express & REST API</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiReactivex fontSize={"22px"} className="text-danger" />
        <div className="tech-icons-text">RxJS</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Redux} alt="Redux" className="tech-icon-images" />
        <div className="tech-icons-text">Riverpod / Redux</div>
      </Col>

      {/* Inteligencia Artificial & Ciencia de Datos */}
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiOpenai fontSize={"22px"} className="text-success" />
        <div className="tech-icons-text">OpenAI API & Codex</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <FaBrain fontSize={"22px"} style={{ color: "#d97757" }} />
        <div className="tech-icons-text">Claude AI & Gemini</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <FaChartBar fontSize={"22px"} className="text-info" />
        <div className="tech-icons-text">Data Science & Chart.js</div>
      </Col>

      {/* Bases de Datos & Cloud */}
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL / SQL</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiMysql fontSize={"22px"} className="text-info" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiSqlite fontSize={"22px"} className="text-info" />
        <div className="tech-icons-text">SQLite (Offline-First)</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiAmazonaws fontSize={"22px"} className="text-warning" />
        <div className="tech-icons-text">AWS (S3 & CloudFront)</div>
      </Col>

      {/* Otros Lenguajes & Estilos */}
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiLaravel fontSize={"22px"} className="text-danger" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <SiPhp fontSize={"22px"} style={{ color: "#8892be" }} />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind & SCSS</div>
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} className="tech-icons">
        <img src={C} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>
    </Row>
  );
}

export default Techstack;
