export type Icons = `${"mdi" | "simple-icons"}:${string}`

interface Page {
  name: string;
  link: string;
}
export const pages: Page[] = [
  {
    name: "links",
    link: "/links"
  },
  {
    name: "table",
    link: "/table"
  }
];

interface Link extends Page{
  icon: Icons;
}
export const links: Link[] = [
  {
    name: "Telegram",
    link: "https://t.me/vyaknil",
    icon: "simple-icons:telegram"
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@vyaknil",
    icon: "simple-icons:youtube"
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/vyaknil",
    icon: "simple-icons:twitch"
  },
  {
    name: "GitHub",
    link: "https://github.com/vyaknil",
    icon: "simple-icons:github"
  },
  {
    name: "Donation",
    link: "https://donatex.gg/donate/vyaknil",
    icon: "mdi:donation"
  },
  {
    name: "VK Live",
    link: "https://live.vkvideo.ru/vyaknil",
    icon: "simple-icons:vk"
  }
];

interface Skill extends Link {
  description: string;
}
export const skills: Skill[] = [
  {
    name: "Figma",
    link: "https://figma.com",
    icon: "simple-icons:figma",
    description: "A collaborative design and prototyping tool for creating user interfaces."
  },
  {
    name: "WebStorm",
    link: "https://www.jetbrains.com/webstorm/",
    icon: "simple-icons:webstorm",
    description: "A powerful integrated development environment (IDE) for JavaScript and related technologies."
  }
  ,
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: "simple-icons:postgresql",
    description: "A robust, open-source object-relational database system known for reliability."
  }
  ,
  {
    name: "Vercel",
    link: "https://vercel.com/",
    icon: "simple-icons:vercel",
    description: "A platform for frontend frameworks, enabling easy deployment and hosting of web applications."
  }

  ,
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "simple-icons:html5",
    description: "The standard markup language that provides the structure for web pages."
  }
  ,
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "simple-icons:css",
    description: "The styling language used to describe the presentation of HTML documents"
  }
  ,
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "simple-icons:javascript",
    description: "The programming language that adds dynamic behavior and interactivity to websites."
  }
  ,
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: "simple-icons:typescript",
    description: "A strongly typed programming language that builds on JavaScript for scalability."
  }

  ,
  {
    name: "React",
    link: "https://react.dev/",
    icon: "simple-icons:react",
    description: "A popular JavaScript library for building interactive user interfaces using components."
  }
  ,
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: "simple-icons:nextdotjs",
    description: "A React framework that enables server-side rendering and static site generation."
  }
];