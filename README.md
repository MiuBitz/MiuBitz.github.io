# MiuBitz

A small OS-inspired project library built with Next.js, React, CSS, and FontAwesome. Both `/` and `/tools` show the same searchable app library. App icons open accessible detail windows with project and source links.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to check the production build.

## Add a project

Edit **`data/tools.ts`**. Copy an existing entry into the `projects` array:

```ts
{
  id: "my-new-project", // Unique ID
  name: "My New Project",
  description: "What this project does.",
  website: "https://example.com", // null for projects without a live web app
  github: "https://github.com/MiuBitz/my-new-project",
  featured: false, // true adds a star and makes it eligible for the dock
  category: "Web App",
  iconName: "wandMagicSparkles",
},
```

Categories: `Web App`, `Desktop Utility`, `Developer Tool`.

Icons: `faceSmile`, `compress`, `qrcode`, `book`, `video`, `music`, `penNib`, `wandMagicSparkles`. Each icon already has a matching color. New entries appear automatically in the library, search, category counts, and details. The dock shows the first four featured projects.

If `website` is null, the primary button says **View project** and opens GitHub. Otherwise it says **Launch app** and opens the website. All project links open in a new tab.

The Next.js app and `data/tools.ts` are the active site. The root `index.html` and `tools.js` are legacy files and aren't used by the Next.js app.
