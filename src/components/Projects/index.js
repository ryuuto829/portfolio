import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import { useLocale, useTranslation } from '@hooks';

import { filteredList } from '@utils';

import FeaturedProjects from '@components/FeaturedProjects';
import OtherProjects from '@components/OtherProjects';
import Blog from '@components/Blog';

export const query = graphql`
  query {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/featured/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            technologies
            showInProjects
            github
            external
            date
            about
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

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            technologies
            showInProjects
            github
            external
            date
            about
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

  // Query all markdown files for featured and other projects
  // in './content/featured' folder for all available languages
  const { featured, projects } = useStaticQuery(query);

  return (
    <section id="projects">
      <div>
        <h2 className="section-header">{sectionsHeaders.projects}</h2>
        <FeaturedProjects projectsList={filteredList(featured, locale)} />
      </div>
      <div>
        <S.Title>Other Noteworthy Projects</S.Title>
        <OtherProjects projectsList={filteredList(projects, locale)} />
        <S.Button>
          <span>Show more</span>
        </S.Button>
      </div>
      <div>
        <S.Title>Some highlights from my blog</S.Title>
        <Blog />
      </div>
    </section>
  );
};

export default Projects;
