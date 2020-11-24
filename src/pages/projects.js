import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { IconGithub, IconLink } from '@icons';
import { filteredList } from '@utils';
import { useLocale } from '@hooks';

const Projects = ({ data }) => {
  const { locale } = useLocale();

  // Filter list in two categories: featured and other projects
  const projectList = filteredList(data.projects, locale);

  return (
    <>
      <main>
        <StyledSection>
          <h1 className="section-header">
            A big list of things I’ve worked on
          </h1>
          <StyledList>
            {projectList &&
              projectList.length > 0 &&
              projectList.map((item, i) => {
                const {
                  date,
                  title,
                  slug,
                  github,
                  external,
                  technologies
                } = item;

                return (
                  <li key={i}>
                    <span className="project-year">{`${new Date(
                      date
                    ).getFullYear()}`}</span>
                    <Link to={slug} className="project-title">
                      {title}
                    </Link>
                    <div className="project-tech">
                      {technologies &&
                        technologies.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer">
                        <IconGithub />
                      </a>
                      <a
                        href={external}
                        target="_blank"
                        rel="noopener noreferrer">
                        <IconLink />
                      </a>
                    </div>
                  </li>
                );
              })}
          </StyledList>
          <StyledButton to="/" className="home-button">
            Go to Main Page
          </StyledButton>
        </StyledSection>
      </main>
    </>
  );
};

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

const StyledSection = styled.section`
  margin-bottom: 100px;
  text-align: center;

  .home-button {
    text-align: center;
    margin-top: 80px;
  }
`;

const StyledList = styled.ul`
  text-align: start;

  li {
    display: grid;
    grid-template-columns: 60px 4fr 3fr 80px;
    gap: 20px;
    align-items: center;
    padding: 20px;
    ${({ theme }) => theme.mixins.boxShadow};
    transition: var(--transition);

    &:hover {
      background-color: ${({ theme }) => theme.colorBlock};
    }
  }

  .project-year {
    font-weight: var(--weight-semibold);
  }

  .project-title {
    font-family: var(--family-secondary);
    font-size: 25px;
    transition: var(--transition);

    &:hover {
      transform: translateX(5px);
    }
  }

  .project-tech {
    color: ${({ theme }) => theme.colorSecondaryText};

    span:not(:last-child) {
      &:after {
        content: '·';
        display: inline-block;
        margin: 0 5px;
      }
    }
  }

  .project-links {
    a {
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    li {
      grid-template-columns: 60px 1fr 80px;
    }

    .project-tech {
      display: none;
    }
  }

  @media (max-width: 480px) {
    li {
      grid-template-columns: 2fr minmax(40px, 1fr);
    }

    .project-year {
      display: none;
    }
  }
`;

const StyledButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
`;

Projects.propTypes = {
  data: PropTypes.object.isRequired
};

export default Projects;
