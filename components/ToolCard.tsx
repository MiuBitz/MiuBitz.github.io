import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faCompress,
  faQrcode,
  faBook,
  faVideo,
  faMusic,
  faPenNib,
  faWandMagicSparkles,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Project } from "@/data/tools";

const iconMap = {
  faceSmile: faFaceSmile,
  compress: faCompress,
  qrcode: faQrcode,
  book: faBook,
  video: faVideo,
  music: faMusic,
  penNib: faPenNib,
  wandMagicSparkles: faWandMagicSparkles,
};

interface ToolCardProps {
  project: Project;
}

export default function ToolCard({ project }: ToolCardProps) {
  const icon = iconMap[project.iconName] || faWandMagicSparkles;
  const primaryUrl = project.website || project.github;
  const isLiveApp = Boolean(project.website);

  return (
    <div className="tool-card">
      <div className="tool-card-top">
        <div className="tool-icon-wrapper" aria-hidden="true">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="tool-badges">
          <span className="badge badge-category">{project.category}</span>
        </div>
      </div>

      <div className="tool-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tool-footer">
        <div className="tool-links">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
            aria-label={`${project.name} - ${isLiveApp ? "Launch Web App" : "View on GitHub"}`}
          >
            <span>{isLiveApp ? "Launch Tool" : "View Project"}</span>
            <FontAwesomeIcon
              icon={isLiveApp ? faArrowUpRightFromSquare : faGithub}
              style={{ fontSize: 12 }}
            />
          </a>

          {isLiveApp && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link github-link"
              title="View source on GitHub"
              aria-label={`${project.name} source code on GitHub`}
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 15 }} />
            </a>
          )}
        </div>

        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-arrow"
          aria-hidden="true"
          tabIndex={-1}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
