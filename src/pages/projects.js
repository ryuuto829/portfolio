import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Navigation, Social, Footer } from '@components';
import { IconGithub, IconLink } from '@icons';
import { filteredList } from '@utils';
import { useLocale } from '@hooks';

const Projects = ({ data }) => {
  const { locale } = useLocale();

  // Filter list in two categories: featured and other projects
  const projectList = filteredList(data.projects, locale);

  return (
    <>
      <Navigation />
      <Social />
      <div id="content">
        <main>
          <section>
            <h1 className="section-header">
              A big list of things I’ve worked on
            </h1>
            <StyledList>
              {projectList &&
                projectList.length > 0 &&
                projectList.map((item, i) => {
                  const { date, title } = item;

                  return (
                    <li key={i}>
                      <span className="project-year">{date}</span>
                      <span className="project-title">{title}</span>
                      <span className="project-tech">React Firebase Redux</span>
                      <div className="project-links">
                        <a href="/">
                          <IconGithub />
                        </a>
                        <a href="/">
                          <IconLink />
                        </a>
                      </div>
                    </li>
                  );
                })}
            </StyledList>
            <StyledButton to="/">Go Back to Main Page</StyledButton>
          </section>
        </main>
        <Footer />
      </div>
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

const StyledList = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    gap: 20px;
    align-items: center;
    padding: 20px;

    ${({ theme }) => theme.mixins.boxShadow};

    &:hover {
      background-color: #333;
    }
  }

  .project-year {
    font-weight: var(--weight-semibold);
  }

  .project-title {
    font-family: var(--family-secondary);
    font-size: 20px;
  }

  .project-tech {
    color: ${({ theme }) => theme.colorSecondaryText};
  }

  .project-links {
    a {
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    li {
      grid-template-columns: 1fr 3fr 1fr;
    }

    .project-tech {
      display: none;
    }
  }

  @media (max-width: 480px) {
    li {
      grid-template-columns: 3fr 1fr;
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
