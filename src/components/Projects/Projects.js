import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AllFitnessCard from "./AllFitnessCard";
import AllFitnessModal from "./AllFitnessModal";
import VelisseCard from "./VelisseCard";
import VelisseModal from "./VelisseModal";
import Particle from "../Particle";
import krakenLogo from "../../Assets/MyProyects/Kraken-store/Logo-Kraken.png";
import jafraLogo from "../../Assets/MyProyects/Jafra/jafra-logo.png";
import buapLogo from "../../Assets/MyProyects/Buap/Logo_de_la_BUAP.webp";
import muscleSelectorImg from "../../Assets/MyProyects/muscleselector/muscleselector.jpg";

function Projects() {
  const [showAllFitness, setShowAllFitness] = useState(false);
  const [initialFullscreen, setInitialFullscreen] = useState(false);

  // Velisse Modal state
  const [showVelisse, setShowVelisse] = useState(false);
  const [velisseInitialView, setVelisseInitialView] = useState("royal");

  const handleOpenAllFitness = (fullscreen = false) => {
    setInitialFullscreen(fullscreen);
    setShowAllFitness(true);
  };

  const handleOpenVelisse = (view = "royal") => {
    setVelisseInitialView(view);
    setShowVelisse(true);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos <strong className="purple">Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí tienes algunos de los proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. AllFitness */}
          <Col md={4} className="project-card">
            <AllFitnessCard onOpenModal={handleOpenAllFitness} />
          </Col>

          {/* 2. Velisse Invitaciones SaaS */}
          <Col md={4} className="project-card">
            <VelisseCard onOpenModal={handleOpenVelisse} />
          </Col>

          {/* 3. Portal de Gestión Académica BUAP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buapLogo}
              isBlog={false}
              title="Portal de Gestión Académica — BUAP"
              description="Sistema web Full Stack desarrollado para la Benemérita Universidad Autónoma de Puebla (BUAP) para la administración y análisis de actividades estudiantiles. Cuenta con frontend interactivo en React, API RESTful en Node.js con operaciones CRUD completas y paneles de métricas con visualizaciones gráficas dinámicas mediante Chart.js."
              ghLink="https://github.com/JesusAdiv/ProyectoPracticas"
            />
          </Col>

          {/* 4. Jafra CRM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jafraLogo}
              imgClassName="project-card-img-invert"
              isBlog={false}
              title="Jafra — CRM & Gestión Comercial"
              description="Plataforma CRM y de gestión comercial para líderes de venta directa desarrollada con Angular, TypeScript y SCSS. Incorpora control de pedidos y cobranza en tiempo real, catálogo interactivo con búsqueda inteligente de SKUs y generador de notas de venta para WhatsApp en un clic. Incluye analíticas de ventas por ciclo, alertas inteligentes de recompra y seguimiento visual de metas de linaje."
            />
          </Col>

          {/* 5. CMR Clínico */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CMR Clínico — Gestión de Laboratorios"
              description="Software web para la administración integral de flujos de trabajo en laboratorios clínicos, cubriendo el ciclo completo desde la orden y lista de tomas de muestras hasta la emisión y entrega de resultados. Desarrollado con Angular, TypeScript y arquitectura multi-tenant sobre MongoDB, cuenta con enrutamiento paramétrico avanzado, modelado de datos para catálogos y perfiles de pruebas, y estricta separación lógica entre laboratorios."
            />
          </Col>

          {/* 6. Kraken Store */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krakenLogo}
              isBlog={false}
              title="Kraken Store"
              description="Tienda de comercio electrónico (E-commerce) desarrollada e implementada desde cero con WordPress y WooCommerce. Incluye catálogo de productos, pasarela de pagos integrada, gestión de inventario y diseño responsivo enfocado en una experiencia de compra online ágil y personalizada."
              instaLink="https://www.instagram.com/kraken_store_puebla"
            />
          </Col>

          {/* 7. Muscle Selector */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muscleSelectorImg}
              isBlog={false}
              title="Muscle Selector — Diagrama Anatómico"
              description="Selector anatómico interactivo para Flutter desarrollado a partir de un fork personalizado. Presenta un diagrama corporal dinámico (vista frontal y dorsal) que permite seleccionar cualquier músculo individual o grupo muscular, vincularlos a listas de entrenamiento, personalizar colores, intensidades y alternar estados de selección en tiempo real."
              ghLink="https://github.com/JesusAdiv/muscle_selector"
            />
          </Col>
        </Row>
      </Container>
      <AllFitnessModal
        show={showAllFitness}
        onHide={() => {
          setShowAllFitness(false);
          setInitialFullscreen(false);
        }}
        initialFullscreen={initialFullscreen}
      />
      <VelisseModal
        show={showVelisse}
        onHide={() => setShowVelisse(false)}
        initialView={velisseInitialView}
      />
    </Container>
  );
}

export default Projects;
