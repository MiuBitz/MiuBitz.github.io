import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Prevent FontAwesome from dynamically adding its CSS since we've imported it above
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://miubitz.github.io"),
  title: {
    default: "MiuBitz - Small tools. Built to be useful.",
    template: "%s | MiuBitz",
  },
  description:
    "A collection of lightweight, open-source web tools and desktop utilities built to simplify everyday tasks, optimize workflows, and get things done faster.",
  keywords: [
    "web tools",
    "developer utilities",
    "webp image optimizer",
    "emoji to png",
    "qr maker",
    "free web apps",
    "lightweight tools",
    "open source utilities",
    "workflow utilities",
    "MiuBitz",
  ],
  authors: [{ name: "Kasun Miu", url: "https://kasunmiu.github.io/" }],
  creator: "Kasun Miu",
  publisher: "MiuBitz",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-sm.svg",
    apple: "/logo-sm.svg",
  },
  openGraph: {
    title: "MiuBitz - Small tools. Built to be useful.",
    description:
      "A collection of lightweight, open-source web tools and desktop utilities built to simplify everyday tasks, optimize workflows, and get things done faster.",
    url: "https://miubitz.github.io/",
    siteName: "MiuBitz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-lg.svg",
        width: 800,
        height: 600,
        alt: "MiuBitz Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiuBitz - Small tools. Built to be useful.",
    description:
      "A collection of lightweight, open-source web tools and desktop utilities built to simplify everyday tasks, optimize workflows, and get things done faster.",
    images: ["/logo-lg.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MiuBitz",
  url: "https://miubitz.github.io/",
  description:
    "A collection of lightweight, open-source web tools and desktop utilities built to simplify everyday tasks, optimize workflows, and get things done faster.",
  author: {
    "@type": "Person",
    name: "Kasun Miu",
    url: "https://kasunmiu.github.io/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
