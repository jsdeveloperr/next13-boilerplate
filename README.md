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

Check our 👉 [example](https://nextjs13-boilerplate.vercel.app)

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
├── components               # Components folder
├── @types                   # TypeScript models
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├──
│   ├── features             # Features folder
│   ├── routers              # Routers folder
│   ├── generators           # Generators folder
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── store                # Store file redux and redux-saga
│   └── libs                 # Libs folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 👨‍💻 Getting Started

### Prerequisites

<details>
  <summary><a href="https://github.com/nvm-sh/nvm">nvm</a></summary>

```shell
brew install nvm
```

</details>
<details>
  <summary><a href="https://nodejs.org/en/">Node.js v18</a></summary>

```shell
nvm install v18.12.0
```

</details>
<details>
  <summary><a href="https://pnpm.io/">Pnpm</a></summary>

```shell
npm install -g pnpm
```

</details>

</details>
<details>
  <summary><a href="https://www.docker.com/products/docker-desktop/">Docker</a></summary>

```shell
Docker Desktop Download
```

</details>

#### ✅ Installation

Requires Node >=14.x

Install NPM packages:

```shell
pnpm install
```

#### 🗂 Development

To start the application in the development mode run:

```shell
pnpm dev
```

#### 🗂 Build

To build the application for production, run:

```shell
pnpm build
```

#### 🗂 Lint

To lint the application run:

```shell
pnpm lint
```

#### 🗂 Docker

To docker the application build:

```shell
pnpm docker:prod:build
```

To docker the application start:

```shell
pnpm docker:prod:start
```

To docker the application stop:

```shell
pnpm docker:prod:stop
```

#### 🎉 Using Plop JS

```html
pnpm generate
```

After this, select if you want to create a page or component and set the name.

You can change the templates and settings of generator at path `generators` on project root.

#### 📄 License

<div calign="center">
    🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @Next13Boilerplate contributors
</div>

---

[Back To The Top](#read-me-template)
