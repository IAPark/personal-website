# Personal Website

Resume site and blog for Izzy Park, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain is set by `public/CNAME`.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Resume PDF

Edit website resume details and the About section in `src/content/resume/resume.md`. Edit the independent paper resume in `src/content/paper-resume/resume.md`, including its contact information, experience, education, and skills. The static `/resume.pdf` file is generated from the paper resume with PDFKit during `npm run build`; the PDF uses PDFKit's built-in Helvetica fonts.

## Website Fonts

Roboto Slab is configured in `astro.config.mjs` using Astro's Google font provider with weights 400 and 700. Astro downloads and caches the fonts for local serving. `BaseHead.astro` loads the font for every page, and `src/styles/global.css` applies its CSS variable site-wide. Visitors do not need to request fonts from Google.

## Markdown Links

External HTTP(S) links in Markdown and MDX open in a new tab with `rel="noopener noreferrer"`, configured through `rehype-external-links` in `astro.config.mjs`. Relative links, page anchors, and email links retain their normal behavior.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
