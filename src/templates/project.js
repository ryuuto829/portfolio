import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { IconGithub, IconLink } from '@icons';
import { Transition } from '@components';

const projectTemplate = ({ pageContext }) => {
  const {
    external,
    github,
    isDefault,
    locale,
    coverImage,
    title,
    html
  } = pageContext;

  return (
    <>
      <Helmet title={title} />

      <main>
        <ProjectSection>
          <header>
            <Transition>
              <h1 className="section-header">{title}</h1>
            </Transition>
          </header>

          <div className="project-content">
            <Transition>
              <Img
                fluid={coverImage.childImageSharp.fluid}
                className="project-image"
              />
            </Transition>

            <Transition>
              <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <IconGithub />
                  <span>Github</span>
                </a>
                <a href={external} target="_blank" rel="noopener noreferrer">
                  <IconLink />
                  <span>Demo</span>
                </a>
              </div>
            </Transition>

            <Transition>
              <div
                className="project-text"
                dangerouslySetInnerHTML={{ __html: html }}></div>
            </Transition>
          </div>
          <Transition>
            <StyledButton
              to={isDefault ? `/` : `/${locale}/`}
              className="home-button">
              Go to Main Page
            </StyledButton>
          </Transition>
        </ProjectSection>
      </main>
    </>
  );
};

const ProjectSection = styled.section`
  text-align: center;
  margin-bottom: 100px;

  header {
    margin-bottom: 60px;
  }

  .project-content {
    text-align: left;
    margin-bottom: 80px;
  }

  .project-image {
    margin-bottom: 40px;
  }

  .project-text {
    h2 {
      font-family: var(--family-secondary);
      font-weight: var(--weight-semibold);
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 30px;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .project-links {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    margin-bottom: 40px;

    a:first-of-type {
      margin-right: 15px;
    }

    a {
      ${({ theme }) => theme.mixins.smallButton};
    }
  }
`;

const StyledButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
`;

export default projectTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
