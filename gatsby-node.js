const path = require('path');
const locales = require('./config/i18n/locales');
const { findKey } = require('./src/utils/findKey');

exports.onCreateWebpackConfig = ({ actions }) => {
  // Add Absolute imports definitions.
  // We can use shorcuts like '@components' insead of '../../File'
  // Read more: https://www.gatsbyjs.com/docs/add-custom-webpack-config/#absolute-imports
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@icons': path.resolve(__dirname, 'src/icons'),
        '@config': path.resolve(__dirname, 'config'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    }
  });
};

// Create different page for each locale.
// Read more: https://medium.com/significa/i18n-with-gatsby-528607b4da81
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // For each page, we’re deleting it, than creating it again for each
  // language passing the locale to the page context
  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const isDefault = locales[lang].default || false;

      const localizedPath = isDefault
        ? page.path
        : locales[lang].path + page.path;

      // Pass in locale and isDefault as context to every page
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          isDefault: isDefault
        }
      });
    });

    resolve();
  });
};

// Use i18n for markdown.
// Read more: https://github.com/gatsbyjs/gatsby/blob/cba8b707515b2169738f2b47af4559e3a158b68c/examples/using-i18n/gatsby-node.js#L9-L38
// Correcting language and slug to the frontmatter of each file.
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Check for all markdown files
  if (node.internal.type === `MarkdownRemark`) {
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    // It will return the file name without '.md' string (e.g. "file-name" or "file-name.lang")
    const name = path.basename(node.fileAbsolutePath, `.md`);

    // Find the key that has "default: true" set
    const defaultKey = findKey(locales, o => o.default === true);

    // Check if file.name.lang has the default lang type
    const isDefault = name.split(`.`)[1] === defaultKey;

    // Files are defined with "name-with-dashes.lang.md"
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1];

    // Create Localized Slug like "/projects/name" or "uk/projects/name"
    const slug = isDefault
      ? `/projects/${name.split(`.`)[0]}`
      : `/${lang}/projects/${name.split(`.`)[0]}`;

    // Adding the nodes on GraphQL for each post as "fields"
    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};

// Create page for all projects markdown files
// Read more: https://www.gatsbyjs.com/docs/adding-markdown-pages/

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve(`./src/templates/project.js`);

  // GatsbyImageSharpFluid fragment is not working in the gatsby-node.js
  // so we manually add all fields to the query from.
  // Read more: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
  // Issue: https://github.com/birkir/gatsby-source-prismic-graphql/issues/98#issuecomment-553906330
  const projectList = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              date
              about
              external
              github
              technologies
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            fields {
              isDefault
              locale
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (projectList.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const projectContent = projectList.data.allMarkdownRemark.edges;

  // Creating project page for each markdown file
  projectContent.forEach(({ node }) => {
    const { slug, locale, isDefault } = node.fields;
    const {
      title,
      date,
      external,
      github,
      technologies,
      about,
      featuredImage,
      coverImage
    } = node.frontmatter;

    createPage({
      path: slug,
      component: projectTemplate,
      context: {
        // additional data can be passed via context
        slug,
        locale,
        isDefault,
        title,
        date,
        external,
        github,
        technologies,
        about,
        html: node.html,
        featuredImage,
        coverImage
      }
    });
  });
};
