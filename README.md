# Pool Landscape Website

A modern and highly performant website built with [Gatsby](https://www.gatsbyjs.com/), [React 18](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). Developed by Francesco Scatassa, this site serves as a responsive frontend for showcasing pool and landscaping projects.

## 🚀 Technology Stack

- **Framework**: [Gatsby v5](https://www.gatsbyjs.com/)
- **UI Library**: [React 18](https://reactjs.org/)
- **Styling**: SCSS / Sass (using the modern Dart Sass `@use` modules)
- **Animations & Sliders**: [Anime.js (v3)](https://animejs.com/) & [Swiper (v12)](https://swiperjs.com/)
- **Images**: `gatsby-plugin-image` with Sharp
- **Language**: TypeScript

## ⚙️ Prerequisites

This project is configured to use modern JavaScript and requires the active LTS version of Node.js. 

- **Node.js**: v22 (`.nvmrc` is included and recommended: run `nvm use`)
- **Package Manager**: NPM (v10 o superiore raccomandata)

## 🛠️ Installation & Setup

1. **Install dependencies**
   Make sure you are running Node 22 (`nvm use`) and run the following command to download all packets:
   ```bash
   npm install
   ```

2. **Run local development server**
   Use the startup script to start the Gatsby development server on `http://localhost:8000`:
   ```bash
   npm run start
   ```

3. **Build for Production**
   Use this command to create a static, optimized build of your website:
   ```bash
   npm run build
   ```
   The build will be generated in the `public/` directory, ready to be deployed.
   You can serve the production build locally to test it by running:
   ```bash
   npm run serve
   ```

## 🧹 Other Commands

- `npm run clean`: Cleans Gatsby `public/` and `.cache/` directories. Use this if you encounter any weird caching or unresolvable build behaviors.
- `npm run typecheck`: Runs a TypeScript static analysis using `tsc --noEmit` to verify type safety.

## 📝 License

This project is maintained by Francesco Scatassa. All rights reserved.
