import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import * as S from './styled';
import { useLocale, useTranslation } from '@hooks';

import FeaturedProjects from '@components/FeaturedProjects';

export const query = graphql`
  query {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            about
            github
            external
            showInProjects
            technologies
            date
          }
          html
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const { locale } = useLocale();
  const { sectionsHeaders } = useTranslation();

  // Query all featured projects in ./content/featured
  const { featured } = useStaticQuery(query);

  // Filter md files extension by current language, return list of projects
  const projectsList = featured.edges.reduce((filteredList, item) => {
    const fileLang = item.node.parent.name.split('.')[1];
    if (fileLang === locale) filteredList.push(item.node.frontmatter);
    return filteredList;
  }, []);

  return (
    <section id="projects">
      <h2 className="section-header">{sectionsHeaders.projects}</h2>

      <FeaturedProjects projectsList={projectsList} />

      <button>Show all projects</button>
      <h2>Other Noteworthy Projects</h2>
    </section>
  );
};

export default Projects;
