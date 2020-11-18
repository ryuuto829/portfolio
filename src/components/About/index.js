import React from 'react';
import * as S from './styled';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation, useLocale } from '@hooks';
import { filteredList } from '@utils';

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
  }
`;

const About = () => {
  const { locale } = useLocale();
  const { sectionsHeaders } = useTranslation();

  const { about } = useStaticQuery(query);

  const aboutContent = filteredList(about, locale)[0].html;

  return (
    <section id="about">
      <h2 className="section-header">{sectionsHeaders.about}</h2>
      <S.AboutInner>
        {/* gatsby-transformer-remark returns markdown content as html string */}
        <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
        <div id="foo">
          <img src="https://via.placeholder.com/274x274" alt="..." />
        </div>
      </S.AboutInner>
    </section>
  );
};

export default About;
