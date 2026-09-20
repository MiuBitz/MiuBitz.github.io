export interface Project {
  id: string;
  name: string;
  description: string;
  website: string | null;
  github: string;
  featured: boolean;
  category: "Web App" | "Desktop Utility" | "Developer Tool";
  iconName: "faceSmile" | "compress" | "qrcode" | "book" | "video" | "music" | "penNib" | "wandMagicSparkles";
}

export const projects: Project[] = [
  {
    id: "emoji-to-png",
    name: "Emoji to PNG",
    description: "A simple tool for converting emojis into PNG images.",
    website: "https://miubitz.github.io/imoji-to-png/",
    github: "https://github.com/MiuBitz/imoji-to-png",
    featured: true,
    category: "Web App",
    iconName: "faceSmile",
  },
  {
    id: "webp-optimizer",
    name: "WebP Image Optimizer",
    description: "Convert and optimize images to WebP directly in your browser.",
    website: "https://miubitz.github.io/WebP_Image_Optimizer/",
    github: "https://github.com/MiuBitz/WebP_Image_Optimizer",
    featured: true,
    category: "Web App",
    iconName: "compress",
  },
  {
    id: "qr-maker",
    name: "QR Maker",
    description: "A lightweight tool for quickly creating QR codes.",
    website: "https://miubitz.github.io/QR-Maker/",
    github: "https://github.com/MiuBitz/QR-Maker",
    featured: true,
    category: "Web App",
    iconName: "qrcode",
  },
  {
    id: "daily-journal",
    name: "Daily Journal",
    description: "A lightweight desktop utility for structured daily Markdown journaling.",
    website: null,
    github: "https://github.com/MiuBitz/DailyJournal",
    featured: true,
    category: "Desktop Utility",
    iconName: "book",
  },
  {
    id: "recmi",
    name: "RecMi",
    description: "A minimal and lightweight screen recorder.",
    website: null,
    github: "https://github.com/MiuBitz/RecMi",
    featured: true,
    category: "Desktop Utility",
    iconName: "video",
  },
  {
    id: "audio-library-browser",
    name: "Audio Library Browser",
    description: "A simple tool for browsing and managing an audio library.",
    website: null,
    github: "https://github.com/MiuBitz/AudioLibraryBrowser",
    featured: false,
    category: "Desktop Utility",
    iconName: "music",
  },
  {
    id: "diary-editor",
    name: "Diary Editor",
    description: "A simple editor for writing and managing diary entries.",
    website: null,
    github: "https://github.com/MiuBitz/Diary-Editor",
    featured: false,
    category: "Desktop Utility",
    iconName: "penNib",
  },
  {
    id: "button-forge",
    name: "ButtonForge",
    description: "Generate hover, pressed, focus, disabled and selected button states from one base color.",
    website: null,
    github: "https://github.com/MiuBitz/ButtonForge",
    featured: false,
    category: "Developer Tool",
    iconName: "wandMagicSparkles",
  },
];
