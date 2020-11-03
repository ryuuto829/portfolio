import React from 'react';
import * as S from './styled';

import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '@hooks';

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

  // Query all featured projects in ./content/featured
  const { featured } = useStaticQuery(query);

  // Filter md files extension by current language, return list of projects
  const projectsList = featured.edges.reduce((filteredList, item) => {
    const fileLang = item.node.parent.name.split('.')[1];
    if (fileLang === locale) filteredList.push(item.node.frontmatter);
    return filteredList;
  }, []);

  return (
    <S.Section id="projects">
      <h2>Featured Projects</h2>
      <S.Showcase>
        {projectsList &&
          projectsList.map((project, i) => {
            const { title, about, technologies } = project;
            // add later external and github to const

            return (
              <S.Card key={i}>
                <S.Featured>
                  <S.ProjectImage>
                    <a href="https://placeholder.com/">
                      <img src="https://via.placeholder.com/1000" alt="..." />
                    </a>
                  </S.ProjectImage>
                  <S.ProjectContent>
                    <S.Overline>Featured Project</S.Overline>
                    <S.Title>{title}</S.Title>
                    <S.Description>{about}</S.Description>
                    <S.TechList>
                      {technologies &&
                        technologies.map((tech, i) => (
                          <S.TechItem key={i}>{tech}</S.TechItem>
                        ))}
                    </S.TechList>
                  </S.ProjectContent>
                </S.Featured>
              </S.Card>
            );
          })}
      </S.Showcase>
    </S.Section>
  );
};

export default Projects;
