import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  // Select the top 4 featured tools for a clean 2x2 grid
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="tools-section" id="tools">
      <div className="section-head">
        <div>
          <h2 className="section-title">Featured Tools</h2>
          <p className="section-subtitle">A curated selection of small, focused software.</p>
        </div>
        <Link href="/tools" className="see-all-header-link">
          <span>See all tools ({projects.length})</span>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 13 }} />
        </Link>
      </div>

      <div className="tools-grid">
        {featuredProjects.map((project) => (
          <ToolCard key={project.id} project={project} />
        ))}
      </div>

      <div className="see-all-container">
        <Link href="/tools" className="button-primary see-all-button">
          <span>Browse all tools</span>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 13 }} />
        </Link>
      </div>
    </section>
  );
}
