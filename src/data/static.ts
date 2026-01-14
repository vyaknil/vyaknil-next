import { Icons } from "@/types";
import { Url } from "next/dist/shared/lib/router/router"

export const pages: {
  name: string,
  href: Url
}[] = [
  {
    name: "links",
    href: "/links"
  },
  {
    name: "table",
    href: "/table",
  }
];

export const links: {
  name: string,
  href: Url,
  icon: Icons
}[] = [
  {
    name: "Telegram",
    href: "https://t.me/vyaknil",
    icon: "simple-icons--telegram"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vyaknil",
    icon: "simple-icons--youtube"
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/vyaknil",
    icon: "simple-icons--twitch"
  },
  {
    name: "GitHub",
    href: "https://github.com/vyaknil",
    icon: "simple-icons--github"
  },
  {
    name: "Donate",
    href: "https://donatex.gg/donate/vyaknil",
    icon: "material-symbols--money-bag-rounded"
  },
];

export const skills: {
  name: string,
  icon: Icons,
  description: string
}[] = [
  {
    name: "Figma",
    icon: "simple-icons--figma",
    description: "A collaborative design tool for creating and prototyping user interfaces in the browser."
  },
  {
    name: "VS Code",
    icon: "mdi--vs-code",
    description: "A lightweight yet powerful code editor with extensive extensions and built-in development tools."
  },
  {
    name: "Typescript",
    icon: "simple-icons--typescript",
    description: "A typed superset of JavaScript that improves code quality and maintainability by catching errors at compile time."
  },
  {
    name: "SASS",
    icon: "simple-icons--sass",
    description: "A CSS preprocessor that adds variables and reusable patterns for cleaner, more maintainable styles."
  },
  {
    name: "Supabase",
    icon: "simple-icons--supabase",
    description: "An open-source backend platform providing database, auth, and real-time features."
  },
  {
    name: "React",
    icon: "simple-icons--react",
    description: "A component-based JavaScript library for building fast and interactive user interfaces."
  },
  {
    name: "Next.js",
    icon: "simple-icons--nextdotjs",
    description: "A React framework for server-side rendering and building high-performance, SEO-friendly apps."
  },
  {
    name: "Vue.js",
    icon: "simple-icons--vuedotjs",
    description: "A progressive JavaScript framework focused on simplicity and reactive UI development."
  },
  {
    name: "Nuxt",
    icon: "simple-icons--nuxt",
    description: "A Vue-based framework that simplifies SSR and static site generation."
  }
];

export const pcComponents: {
  name: string,
  icon: Icons,
  description: string
}[] = [
  {
    name: "CPU",
    icon: "mdi--cpu-64-bit",
    description: "Intel Core i5-3470"
  },
  {
    name: "GPU",
    icon: "mdi--gpu",
    description: "KFA2 GTX 1650 4GB GDDR6"
  },
  {
    name: "Motherboard",
    icon: "material-symbols--developer-board-rounded",
    description: "ASUS P8H77-M LE"
  },
  {
    name: "RAM",
    icon: "material-symbols--memory-rounded",
    description: "Samsung DDR3 4+4 GB"
  },
  {
    name: "Disks",
    icon: "mdi--harddisk",
    description: `HDD Seagate 80GB
                  HDD Seagate 256GB`
  },
  {
    name: "Microphone",
    icon: "material-symbols--mic-rounded",
    description: "Fifine Ampligame A6"
  },
  {
    name: "Camera",
    icon: "material-symbols--photo-camera-rounded",
    description: "Fifine K420"
  }
];