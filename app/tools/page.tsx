import type { Metadata } from "next";
import Desktop from "@/components/Desktop";
export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Browse the complete directory of small, lightweight web tools and desktop utilities from MiuBitz. Free, open-source, and built to solve daily workflow problems.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "All Tools - MiuBitz",
    description:
      "Browse the complete directory of small, lightweight web tools and desktop utilities from MiuBitz.",
    url: "https://miubitz.github.io/tools",
  },
};

export default function ToolsPage() { return <Desktop />; }
