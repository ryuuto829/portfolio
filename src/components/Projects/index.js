import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import { useLocale, useTranslation } from '@hooks';
import { filteredList } from '@utils';
import { FeaturedProjects, OtherProjects, Blog } from '@components';

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
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
                fluid(maxWidth: 700, traceSVG: { color: "#1e1e1e" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
      <section id="projects">
        <div>
          <h2 className="section-header">{sectionsHeaders.projects}</h2>
          <FeaturedProjects projectsList={featuredList} />
        </div>
      </section>

      <S.OtherProject>
        <h3 className="section-overline">Other Noteworthy Projects</h3>
        <OtherProjects projectsList={projectsList} />
        <button>
          <span>Show more</span>
        </button>
      </S.OtherProject>

      <S.Blog>
        <h3 className="section-overline">Some highlights from my blog</h3>
        <Blog />
      </S.Blog>
    </>
  );
};

export default Projects;
