import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h2 className="section-main-title pb-4 text-center">
        Actividad en <span className="text-gradient-brand">GitHub</span>
      </h2>
      <GitHubCalendar
        username="JesusAdiv"
        blockSize={15}
        blockMargin={5}
        color="#38bdf8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
