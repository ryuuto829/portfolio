import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from '@hooks';
import { filteredList } from '@utils';
import { Transition } from '@components';

const query = graphql`
  query {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          html
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }

    avatar: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "me.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = ({ locale }) => {
  const { sectionsHeaders } = useTranslation();

  const { about, avatar } = useStaticQuery(query);

  // Extract html string with about content after filtering by language
  const aboutContent = filteredList(about, locale)[0].html;

  return (
    <section id="about">
      <Transition>
        <h2 className="section-header">{sectionsHeaders.about}</h2>
      </Transition>
      <S.AboutInner>
        <Transition animation="fadeInUp">
          {/* gatsby-transformer-remark returns markdown content as html string */}
          <div
            dangerouslySetInnerHTML={{ __html: aboutContent }}
            className="about-content"
          />
        </Transition>
        <Transition animation="fadeInUp" className="image-wrapper">
          <Img
            fluid={avatar.childImageSharp.fluid}
            alt="..."
            className="about-image"
          />
        </Transition>
      </S.AboutInner>
    </section>
  );
};

About.propTypes = {
  locale: PropTypes.string.isRequired
};

export default About;
