# 師大資工系學會官網
## 如何使用
### 下載
```bash
git clone https://github.com/NTNU-CSIE-SA/Official-Website.git
```
### 軟體需求
- pnpm
- Node.js

### 安裝
```bash
pnpm install
```
### 預覽
```bash
pnpm dev
```
接著去瀏覽器打開 terminal 中顯示的網址，預設為 `http://localhost:4321`

### 部署到正式官網
只需把更改的內容 commit 後 push 到 `main` branch 即可。
盡量在 commit 中加上如 `fix: ` 或 `feat: ` 前綴來說明這次 commit 的種類，`feat: ` 代表這次 commit 是一個新文章，`fix: ` 代表這次 commit 修正了一個文章內錯誤或是是修正了網站的錯誤。

## 撰寫公告 / 回顧
### 公告撰寫方式
到 `src/content/announcement/` 中新增一個想要作為網址名稱的 directory，然後在裡面新增 `index.md` 檔案
### 回顧撰寫方式
到 `src/content/review/` 中新增一個想要作為網址名稱的 directory，然後在裡面新增 `index.md` 檔案
### 內文格式
內容格式如下：
```
---
title: "<標題>" # 頁面標題跟文章標題
summary: "<摘要>" # 在外面顯示的摘要
date: "<MMM> <DD> <YYYY>" # 發布日期，時間還沒到的文章不會顯示，格式如 "Sep 01 2024"，
draft: false # 是否為草稿，若為 true 則不會顯示在網站上
tags:
- 系學會
- <股別>
photosUrl: <網路相簿連結> # 此項目非必需
eventUrl: <活動連結> # 此項目非必需
---

<Markdown 內容>
```

#### 嵌入照片
如果需要嵌入照片，在該 directory 中新增圖片，然後用 markdown 語法引用圖片，例如：
```
![圖片說明](./image_name.jpg)
```
或是直接使用外部圖片網址
```
![圖片說明](https://example.com/image_name.jpg)
```
#### 嵌入 PDF
如果需要嵌入 PDF，請在 `public` 目錄下尋找分類之 directory，並在其底下新增 PDF 檔案，如無分類，請自行創建

接著在 markdown 中使用 `<embed>` 標籤引用，例如：
```html
<embed src="/review-source/Game-Jam-2024-Closing.pdf" width="100%" height="500">
```
或是使用外部網址嵌入
```html
<embed src="https://example.com/PDFfile.pdf" width="100%" height="500">
```


![Astro Sphere Lighthouse Score](_astrosphere.jpg)

Astro Sphere is a static, minimalist, lightweight, lightning fast portfolio and blog theme based on my personal website.

It is primarily Astro, Tailwind and Typescript, with a very small amount of SolidJS for stateful components.

## 🚀 Deploy your own

[![Deploy with Vercel](_deploy_vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere)  [![Deploy with Netlify](_deploy_netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere)

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)
- ✅ Searchable content (posts and projects)

## 💯 Lighthouse score
![Astro Sphere Lighthouse Score](_lighthouse.png)

## 🕊️ Lightweight
All pages under 100kb (including fonts)

## ⚡︎ Fast
Rendered in ~40ms on localhost

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🗺️ Roadmap

A few features I plan to implement
- ⬜ Code Blocks - copy to clipboard
- ⬜ Article Pages - Table of Contents
- ⬜ Article Pages - Share on social media

## ✨ Acknowledgement

Theme inspired by [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.io/) and [Hayden Bleasel](https://www.haydenbleasel.com/)


## 🏛️ License

MIT


# 1.0.1 Update

Added ability to run dev and preview on local network.
added npm run dev:network
added npm run preview:network

Added slightly more particle density in both light and dark mode.

Added subtle dark mode star and meteor animations.

Removed eslint config

