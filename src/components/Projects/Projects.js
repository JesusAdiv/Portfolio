import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AllFitnessCard from "./AllFitnessCard";
import AllFitnessModal from "./AllFitnessModal";
import VelisseCard from "./VelisseCard";
import VelisseModal from "./VelisseModal";
import Particle from "../Particle";
import krakenLogo from "../../Assets/MyProyects/Kraken-store/Logo-Kraken.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Featured Project 1: AllFitness */}
          <Col md={4} className="project-card">
            <AllFitnessCard onOpenModal={handleOpenAllFitness} />
          </Col>

          {/* Featured Project 2: Velisse Invitaciones SaaS */}
          <Col md={4} className="project-card">
            <VelisseCard onOpenModal={handleOpenVelisse} />
          </Col>

          {/* Project 3: Kraken Store */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krakenLogo}
              isBlog={false}
              title="Kraken Store"
              description="Tienda de comercio electrónico (E-commerce) desarrollada e implementada desde cero con WordPress y WooCommerce. Incluye catálogo de productos, pasarela de pagos integrada, gestión de inventario y diseño responsivo enfocado en una experiencia de compra online ágil y personalizada."
              instaLink="https://www.instagram.com/kraken_store_puebla"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
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
