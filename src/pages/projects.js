import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { useTranslation } from '@hooks';
import { IconGithub, IconLink } from '@icons';
import { filteredList, localizedLink } from '@utils';
import { Transition } from '@components';

const Projects = ({ data, pageContext }) => {
  const { isDefault, locale } = pageContext;
  const { goToMain, allProjectsPage } = useTranslation();

  // Filter list in two categories: featured and other projects
  const projectList = filteredList(data.projects, locale);

  return (
    <>
      <Helmet title={allProjectsPage.title} />

      <main>
        <StyledSection>
          <Transition>
            <h1 className="section-header">{allProjectsPage.title}</h1>
          </Transition>
          <Transition>
            <p className="subtitle">{allProjectsPage.subtitle}</p>
          </Transition>

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
                    <Transition className="project-item">
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
                    </Transition>
                  </li>
                );
              })}
          </StyledList>
          <Transition>
            <StyledButton
              to={localizedLink(`/`, locale, isDefault)}
              className="home-button">
              {goToMain}
            </StyledButton>
          </Transition>
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

  .subtitle {
    margin-bottom: 40px;
  }

  h1 {
    margin-top: 40px;
  }
`;

const StyledList = styled.ul`
  text-align: start;

  .project-item {
    display: grid;
    grid-template-columns: 60px 4fr 3fr 80px;
    gap: 20px;
    align-items: center;
    padding: 20px;
    ${({ theme }) => theme.mixins.boxShadow};
    transition: var(--transition);

    &:hover {
      background-color: ${({ theme }) => theme.block};
    }
  }

  .project-year {
    text-align: center;
    font-weight: var(--weight-semibold);
    font-family: var(--family-secondary);
    color: var(--salmon);
  }

  .project-title {
    font-family: var(--family-secondary);
    font-size: 25px;
    font-size: clamp(var(--text-normal), 5vw, var(--text-large));
    transition: var(--transition);

    &:hover {
      transform: translateX(5px);
    }
  }

  .project-tech {
    color: ${({ theme }) => theme.secondaryText};
    font-size: var(--text-small);

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
    .project-item {
      grid-template-columns: 60px 1fr 80px;
    }

    .project-tech {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .project-item {
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
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    isDefault: PropTypes.bool.isRequired
  })
};

export default Projects;
