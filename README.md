<a name="read-me-template" />

# 📦 Next.js 13 Boilerplate

> This is a readme from next.js 13 boilerplate.

<p align="center">
    <img src="https://github.com/jsdeveloperr/nextjs-boilerplate/blob/master/public/assets/nextjs12-boilerplate.png" width="500" alt="Next.js 13 Boilerplate" />
</p>

<div align="center">

![ts](https://img.shields.io/badge/TypeScript%20-%23F7DF1E.svg?logo=typescript&logoColor=white&color=3178C6)
![next](https://img.shields.io/badge/Next-20232A?logo=next.js&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)
![redux-saga](https://img.shields.io/badge/Redux%20Saga-86D46B?logo=redux%20saga&logoColor=white&color=74C417)
![tailwindcss](https://img.shields.io/badge/Tailwindcss-007FFF?logo=tailwindcss&logoColor=white)

</div>

Boilerplate to help developers to have a fast project configuration using the most recent next version and some tools to improve the developer experience.

## :rocket: Example

Check our 👉 [example](https://nextjs-13-boilerplate.vercel.app)

### 🗂 Features

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score
- 🔥 SWC instead of babel
- 🎉 redux, redux-saga and next-redux-wrapper
- 🌈 react-lazy-loader-component and html-react-parser
- 🎉 next-useragent and classnames
- 🦊 react-hook-form and yup
- 🎨 PlopJS and Axios
- 🎉 Env and Docker

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── docs                     # documentation mdx
├── e2e                      # Cypress e2e
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├──
│   ├── layout               # Atomic layout components
│   ├── models               # TypeScript models
│   ├── constants            # Constants
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── i18n                 # Locale i18n
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

#### ✅ Installation

- Clone you project to your machine

#### 🚀 Install dependencies with pnpm

```html
pnpm
```

#### 🎉 Using Plop JS

```html
pnpm generate
```

After this, select if you want to create a page or component and set the name.

You can change the templates and settings of generator at path `generators` on project root.

---

[Back To The Top](#read-me-template)
