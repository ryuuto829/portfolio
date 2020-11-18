import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import Rocket from '@icons/Rocket';
import { socialLinks } from '@config';
import Tooltip from '@components/Tooltip';

const Footer = () => {
  // Query the JSON files in ./config/i18n/index
  const { title, rights } = useTranslation();

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <S.Footer>
        <Tooltip content="Scroll to Top" placement="right">
          <S.ToTop onClick={scrollToTop}>
            <Rocket />
          </S.ToTop>
        </Tooltip>
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
        <S.Credit>{`© ${year} ${title}. ${rights}`}</S.Credit>
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
      </S.Footer>
    </>
  );
};

export default Footer;
