"use client";

import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Project, projects } from "@/data/tools";
import ToolCard from "./ToolCard";

type FilterTab = "all" | "featured" | "web" | "desktop";

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project: Project) => {
      // Tab filter
      if (activeTab === "featured" && !project.featured) return false;
      if (activeTab === "web" && project.category !== "Web App") return false;
      if (activeTab === "desktop" && project.category !== "Desktop Utility") return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesCat = project.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="tools-section" id="tools">
      <div className="section-head">
        <div>
          <h2 className="section-title">Tools</h2>
          <p className="section-subtitle">Simple software for practical problems.</p>
        </div>
      </div>

      <div className="tools-controls">
        <div className="filter-row">
          <div className="filter-tabs" role="tablist" aria-label="Filter tools">
            <button
              type="button"
              className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All ({projects.length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeTab === "featured" ? "active" : ""}`}
              onClick={() => setActiveTab("featured")}
            >
              Featured ({projects.filter((p) => p.featured).length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeTab === "web" ? "active" : ""}`}
              onClick={() => setActiveTab("web")}
            >
              Web Apps
            </button>
            <button
              type="button"
              className={`filter-tab ${activeTab === "desktop" ? "active" : ""}`}
              onClick={() => setActiveTab("desktop")}
            >
              Desktop
            </button>
          </div>

          <div className="search-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tools"
            />
          </div>
        </div>
      </div>

      <div className="tools-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ToolCard key={project.id} project={project} />
          ))
        ) : (
          <div className="no-results">
            <p>No tools found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              type="button"
              className="action-link"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              style={{ marginTop: 12 }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
