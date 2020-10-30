import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
import { useTranslation } from '@hooks';

import { socialLinks } from '@config';

const query = graphql`
  query useCreditInfo {
    allFile(filter: { relativeDirectory: { eq: "translations" } }) {
      edges {
        node {
          childTranslationsJson {
            creditInfo {
              name
              rights
            }
          }
          name
        }
      }
    }
  }
`;

const Footer = () => {
  // Query the JSON files in ./config/i18n/index
  const { allFile } = useStaticQuery(query);
  const { creditInfo } = useTranslation(allFile);

  const year = new Date().getFullYear();

  return (
    <>
      <S.SocialMenu>
        {socialLinks &&
          socialLinks.map(({ url, name }, i) => (
            <S.SocialItem key={i}>
              <S.SocialLink
                href={url}
                aria-label={name}
                target="_blank"
                title={name}
                rel="noopener noreferrer">
                {name}
              </S.SocialLink>
            </S.SocialItem>
          ))}
      </S.SocialMenu>
      <S.Credit>
        {`© ${year} ${creditInfo.name}. ${creditInfo.rights}`}
      </S.Credit>
      <S.Credit>
        Built with{' '}
        <S.GatsbyLink
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer">
          Gatsby
        </S.GatsbyLink>{' '}
        | Hosted on ...
      </S.Credit>
    </>
  );
};

export default Footer;
