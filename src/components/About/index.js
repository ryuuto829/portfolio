import React from 'react';
import * as S from './styled';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation, useLocale } from '@hooks';
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

const About = () => {
  const { locale } = useLocale();
  const { sectionsHeaders } = useTranslation();

  const { about, avatar } = useStaticQuery(query);

  const aboutContent = filteredList(about, locale)[0].html;

  return (
    <section id="about">
      <Transition>
        <h2 className="section-header">{sectionsHeaders.about}</h2>
      </Transition>
      <S.AboutInner>
        <Transition animation="fadeInLeft">
          {/* gatsby-transformer-remark returns markdown content as html string */}
          <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
        </Transition>
        <Transition animation="fadeInRight">
          <div id="foo">
            <Img
              fluid={avatar.childImageSharp.fluid}
              alt="..."
              className="img"
            />
          </div>
        </Transition>
      </S.AboutInner>
    </section>
  );
};

export default About;
