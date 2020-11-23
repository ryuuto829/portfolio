import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { IconGithub, IconLink } from '@icons';

const projectTemplate = ({ pageContext }) => {
  const {
    date,
    // about,
    external,
    github,
    // isDefault,
    // locale,
    // slug,
    // technologies,
    featuredImage,
    title,
    html
  } = pageContext;

  return (
    <>
      <main>
        <section className="blog-post-container">
          <div className="blog-post">
            <h1 className="section-header">{title}</h1>
            <h2>{date}</h2>
            <Img fluid={featuredImage.childImageSharp.fluid} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div>
            <Button href={github} target="_blank" rel="noopener noreferrer">
              <IconGithub />
              <span>Github</span>
            </Button>
            <Button href={external} target="_blank" rel="noopener noreferrer">
              <IconLink />
              <span>Demo</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

const Button = styled.a`
  ${({ theme }) => theme.mixins.smallButton};
`;

export default projectTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
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
