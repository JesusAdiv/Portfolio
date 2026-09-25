import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsInstagram } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem", lineHeight: "1.5" }}>
            {props.description}
          </Card.Text>
        </div>

        <div className="project-card-actions mt-3 d-flex justify-content-center gap-2 flex-wrap">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="flex-fill">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="flex-fill"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {props.instaLink && (
            <Button
              variant="primary"
              href={props.instaLink}
              target="_blank"
              className="flex-fill d-flex align-items-center justify-content-center"
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                border: "none",
                color: "#ffffff",
                fontWeight: "600"
              }}
            >
              <BsInstagram /> &nbsp;
              {"Instagram"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
