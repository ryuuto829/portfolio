<h1 align="center">My personal website & portfolio</h1>

<p align="center">
  <a href="https://dmytrorykhlyk.com">dmytrorykhlyk.com</a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/outline/outline" rel="nofollow"><img src="https://circleci.com/gh/outline/outline.svg?style=shield&amp;circle-token=c0c4c2f39990e277385d5c1ae96169c409eb887a"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat"></a>
  <a href="https://github.com/styled-components/styled-components"><img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg"></a>
  <a href="https://translate.getoutline.com/project/outline"><img src="https://badges.crowdin.net/outline/localized.svg"></a>
</p>

<img alt="Logo" src="https://raw.githubusercontent.com/ryuuto829/portfolio/master/static/og.png" />

# Development

Project requires the following dependencies:

- Node.js >= 14.12.0
- Yarn
- Gatsby CLI >= 2.12.99

Install and use the correct version of Node using NVM

```
nvm install
```

Install dependencies

```
yarn
```

Start the development server

```
gatsby develop
```

# Production

Generate a full static production build

```
gatsby build
```

Preview the site as it will appear once deployed

```
gatsby serve
```

# Structure

- `config/index.js` - main configuration file
- `config/i18n/` - configuration and translations for Multi-language (English and Ukrainian)
- `content/` - markdown files and their assets
- `src/` - main gatsby folder for components, hooks, pages, templates, styles and images
