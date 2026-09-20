import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Browse the complete directory of small, lightweight web tools and desktop utilities from MiuBitz. Free, open-source, and built to solve daily workflow problems.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "All Tools — MiuBitz",
    description:
      "Browse the complete directory of small, lightweight web tools and desktop utilities from MiuBitz.",
    url: "https://miubitz.github.io/tools",
  },
};

export default function ToolsPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="tools-page-breadcrumb">
          <Link href="/" className="back-home-link">
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 12 }} />
            <span>Back to Home</span>
          </Link>
        </div>
        <ToolsSection />
      </main>
      <Footer />
    </div>
  );
}
