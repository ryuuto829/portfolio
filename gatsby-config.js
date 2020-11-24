module.exports = {
  siteMetadata: {
    title: `Dmytro Rykhlyk`,
    titleTemplate: '%s | Dmytro Rykhlyk',
    description: `Dmytro Rykhlyk is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
    siteUrl: `http://localhost:8000`, // Add later
    image: '/og.png'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `i18n`,
        path: `${__dirname}/config/i18n/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/projects/assets/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto:300,400,500`,
          `roboto mono:300,400,500`,
          `oswald:300,400,600`
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dmytro Rykhlyk`,
        short_name: `Dmytro Rykhlyk`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#1e1e1e`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
