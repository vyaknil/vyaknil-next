type Icon = `${"mdi" | "simple-icons"}:${string}`

interface Page {
  name: string,
  link: string
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

interface Link {
  name: string,
  link: string,
  icon: Icon
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