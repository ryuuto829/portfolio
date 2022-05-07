<h1 align="center">My personal website & portfolio</h1>

<p align="center">
  <a href="https://github.com/styled-components/styled-components"><img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg"></a>
   <a href="https://app.netlify.com/sites/zealous-jones-86bb63/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/008fed72-e9a6-4897-97f8-f243683c350d/deploy-status" alt="Netlify Status" />
  </a>
</p>

<p align="center">
  <a href="https://dmytrorykhlyk.com">dmytrorykhlyk.com</a>
</p>

<img alt="Logo" src="https://github.com/ryuuto829/portfolio/blob/master/static/og.png?raw=true" />

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
