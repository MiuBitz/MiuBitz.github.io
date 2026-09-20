"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand-link" aria-label="MiuBitz Home">
        <Image
          src="/logo-lg.svg"
          alt="MiuBitz"
          width={110}
          height={34}
          style={{ height: "32px", width: "auto" }}
          priority
        />
      </Link>

      <nav className="nav-links">
        <Link href="/tools">Tools</Link>
        <a
          href="https://github.com/MiuBitz"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-badge-link"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}
