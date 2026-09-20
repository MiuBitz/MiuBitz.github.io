import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Tools — MiuBitz",
  description: "Browse the complete directory of small, lightweight tools and utilities from MiuBitz.",
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
