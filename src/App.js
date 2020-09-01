import React from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 2,
      random: false,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: false,
      speed: 2,
      direction: "top",
      out_mode: "out",
    },
  },
};

function App() {
  return (
    <div className="App center">
      <Particles className="particles" params={particlesOptions} />
      <div className="info">
        <h1>Hi, I'm</h1>
        <h1>Monish Karwal</h1>
        <p>Innovative full stack developer</p>
        <div className="contact">
          <a
            className="contactIcon"
            href="https://github.com/monishkarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            className="contactIcon"
            href="https://www.linkedin.com/in/monishkarwal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            className="contactIcon"
            href="https://twitter.com/monish_karwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a
            className="contactIcon"
            href="mailto:monish1apr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
