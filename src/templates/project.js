import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Navigation, Social, Footer, SEO } from '@components';
import { IconGithub, IconLink } from '@icons';

const projectTemplate = ({ pageContext }) => {
  const {
    date,
    about,
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
      <SEO title={title} description={about} />
      <Navigation />
      <Social />
      <div id="content">
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
        <Footer />
      </div>
    </>
  );
};

const Button = styled.a`
  ${({ theme }) => theme.mixins.smallButton};
`;

export default projectTemplate;

export const pageQuery = graphql`
  query Project($locale: String!, $title: String!, $featuredImage: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        date
        about
        external
        github
        technologies
      }
      html
    }
    featuredImage: file(relativePath: { eq: $featuredImage }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
