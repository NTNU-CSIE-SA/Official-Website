import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "NTNU CSIE SA",
  DESCRIPTION: "歡迎來到師大資工系學會官方網站",
  AUTHOR: "師大資工系學會",
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

// Review Page 
export const REVIEW: Page = {
  TITLE: "回顧",
  DESCRIPTION: "系上歷屆活動",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and  by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "首頁", 
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
    HREF: "/review", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ntnucsie.union@gmail.com",
    HREF: "ntnucsie.union@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "NTNU-CSIE-SA",
    HREF: "https://github.com/NTNU-CSIE-SA"
  },
  { 
    NAME: "Facebook",
    ICON: "facebook",
    TEXT: "師大資工系系學會",
    HREF: "https://www.facebook.com/ntnucsieclub"
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "ntnu_csie",
    HREF: "https://www.instagram.com/ntnu_csie",
  },
  {
    NAME: "Discord",
    ICON: "discord",
    TEXT: "NTNUCSIE Student Association 🎉🎉",
    HREF: "https://discord.gg/byydwBR2Hc",
  },
]

