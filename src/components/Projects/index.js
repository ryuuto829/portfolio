import React from 'react';
import {
  useStaticQuery,
  graphql
  //  Link
} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as S from './styled';
import { useLocale, useTranslation, useTheme } from '@hooks';
import { filteredList } from '@utils';
import {
  FeaturedProjects,
  OtherProjects,
  Transition
  // , Blog
} from '@components';

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

const Projects = () => {
  const { locale } = useLocale();
  const { sectionsHeaders } = useTranslation();
  const { theme } = useTheme();

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
      {featuredList && featuredList.length > 0 && (
        <section id="projects">
          <div>
            <Transition>
              <h2 className="section-header">{sectionsHeaders.projects}</h2>
            </Transition>
            <FeaturedProjects projectsList={featuredList} />
          </div>
        </section>
      )}

      {projectsList && projectsList.length > 0 && (
        <S.OtherProject>
          <Transition>
            <h3 className="section-overline">Other Noteworthy Projects</h3>
          </Transition>
          <OtherProjects projectsList={projectsList} />
          <Transition>
            <AniLink
              paintDrip
              hex={theme === 'dark' ? '#1d1c21' : '#f2f3f5'}
              to={locale === 'en' ? '/projects' : `/${locale}/projects`}
              className="show-more">
              <span>Show more</span>
            </AniLink>
          </Transition>
        </S.OtherProject>
      )}

      {/* <S.Blog>
        <h3 className="section-overline">Some highlights from my blog</h3>
        <Blog />
      </S.Blog> */}
    </>
  );
};

export default Projects;
