import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">
        <span className="dot"></span>
        <span>A collection of useful tools</span>
      </div>

      <h1 className="hero-title">
        Small tools.<br />
        Built to be useful.
      </h1>

      <p className="hero-description">
        A set of lightweight tools and utilities built for daily workflows.
        Free, open-source, and made to help make your work a little easier too. Built by{" "}
        <a
          href="https://kasunmiu.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator-inline-link"
        >
          Kasun Miu
        </a>
        .
      </p>

      <div className="hero-actions">
        <a href="#tools" className="button-primary">
          <span>Explore tools</span>
          <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: 13 }} />
        </a>
        <a
          href="https://github.com/MiuBitz"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>Star on GitHub</span>
        </a>
      </div>
    </section>
  );
}
