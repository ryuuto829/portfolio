import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';
import { socialLinks } from '@config';
import { IconRocket } from '@icons';
import { Tooltip } from '@components';

const Footer = () => {
  // Query the JSON files in ./config/i18n/index
  const { title, footerContent, tooltipContent } = useTranslation();

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
    // window.scrollTo(0, 0);
  };

  return (
    <>
      <S.Footer>
        <Tooltip content={tooltipContent.goToTop} placement="right">
          <S.ToTop onClick={scrollToTop}>
            <IconRocket />
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
        <S.Credit>
          <p>{`© ${year} ${title}. ${footerContent.rights}`}</p>

          <p>
            {footerContent.built}
            {''}
            <S.GatsbyLink
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              Gatsby
            </S.GatsbyLink>{' '}
            | {footerContent.host} ...
          </p>
        </S.Credit>
      </S.Footer>
    </>
  );
};

export default Footer;
