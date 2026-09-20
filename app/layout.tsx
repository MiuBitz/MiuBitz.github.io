import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Prevent FontAwesome from dynamically adding its CSS since we've imported it above
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "MiuBitz — Small tools. Built to be useful.",
  description:
    "MiuBitz is a collection of small, lightweight tools and utilities built to solve everyday problems, simplify workflows, and make useful things a little easier.",
  icons: {
    icon: "/logo-sm.svg",
    apple: "/logo-sm.svg",
  },
  openGraph: {
    title: "MiuBitz — Small tools. Built to be useful.",
    description:
      "A collection of lightweight apps and utilities created to solve everyday problems.",
    url: "https://miubitz.github.io/",
    siteName: "MiuBitz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-sm.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
