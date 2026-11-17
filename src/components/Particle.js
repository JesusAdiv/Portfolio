import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 1800,
            },
          },
          color: {
            value: ["#38bdf8", "#6366f1", "#10b981"],
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.05,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
          size: {
            value: 1.8,
            random: true,
          },
          opacity: {
            value: 0.22,
            random: true,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
