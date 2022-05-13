import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as S from './styled';
import { useTranslation, useTheme } from '@hooks';
import { filteredList, localizedLink } from '@utils';
import { Featured, OtherProjects, Transition } from '@components';

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            isFeatured
            showInProjects
            date
            title
            technologies
            about
            github
            external
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

const Projects = ({ locale, isDefault }) => {
  const { sectionsHeaders, projectsContent } = useTranslation();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Query all markdown files for featured and other projects
  // in './content/featured' folder for all available languages
  const { projects } = useStaticQuery(query);

  // Filter list of projects for current language
  const list = filteredList(projects, locale);

  // Filter list in two categories: featured and other projects
  const featuredList = list.filter(item => item.isFeatured);
  const projectsList = list.filter(item => item.showInProjects);

  return (
    <>
      {/* Featured projets */}
      {featuredList && featuredList.length > 0 && (
        <section id="projects">
          <div>
            <Transition>
              <h2 className="section-header">{sectionsHeaders.projects}</h2>
            </Transition>
            <Featured projectsList={featuredList} />
          </div>
        </section>
      )}

      {/* Other projects */}
      {projectsList && projectsList.length > 0 && (
        <S.OtherProject>
          <Transition>
            <h3 className="section-overline">
              {sectionsHeaders.otherProjects}
            </h3>
          </Transition>
          <OtherProjects projectsList={projectsList} />
          <Transition>
            <AniLink
              paintDrip
              hex={isDarkMode ? '#1d1c21' : '#f2f3f5'}
              to={localizedLink('/projects', locale, isDefault)}
              className="show-more">
              <span>{projectsContent.showAll}</span>
            </AniLink>
          </Transition>
        </S.OtherProject>
      )}
    </>
  );
};

Projects.propTypes = {
  locale: PropTypes.string.isRequired,
  isDefault: PropTypes.bool.isRequired
};

export default Projects;
