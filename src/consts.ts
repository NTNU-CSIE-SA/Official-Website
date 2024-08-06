import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and announcement for designers and developers.",
  AUTHOR: "Mark Horn",
}

// About Page
export const ABOUT: Page = {
  TITLE: "關於",
  DESCRIPTION: "關於系學會",
}

// Announcement Page
export const ANNOUNCEMENT: Page = {
  TITLE: "公告",
  DESCRIPTION: "系學會相關公告",
}

// Events Page 
export const EVENTS: Page = {
  TITLE: "回顧",
  DESCRIPTION: "系上歷屆活動",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and events by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "關於", 
    HREF: "/about",
  },
  { 
    TEXT: "公告", 
    HREF: "/announcement", 
  },
  { 
    TEXT: "回顧", 
    HREF: "/events", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

