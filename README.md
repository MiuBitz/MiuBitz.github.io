# MiuBitz Website (Next.js)

A modern, fast showcase website for MiuBitz tools built with **Next.js (App Router)**, **Vanilla CSS**, and **FontAwesome**.

## Features

- **App Router & React**: Clean component architecture (`Header`, `Hero`, `ToolsSection`, `ToolCard`, `CreatorSection`, `Footer`).
- **Data Driven**: Tool collection powered by `data/tools.ts` and `tools.js`.
- **Search & Category Filters**: Real-time filtering by category (All, Featured, Web Apps, Desktop Utilities) and dynamic search.
- **FontAwesome Icons**: High-quality icons for all tools and action links.
- **Brand Assets**: Crisp SVG logos from `logo/` integrated into header, footer, and favicon.
- **Responsive Design**: Mobile and desktop layouts adhering to the `index.html` styling.

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Adding Tools

To add or modify tools, edit `data/tools.ts` or `tools.js`.
