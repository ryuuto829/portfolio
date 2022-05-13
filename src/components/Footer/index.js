import React from 'react';
import * as S from './styled';
import { socialLinks } from '@config';
import { useTranslation } from '@hooks';
import { IconRocket } from '@icons';
import { Tooltip, Transition } from '@components';

const Footer = () => {
  const { title, footerContent, tooltipContent } = useTranslation();

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <S.Footer>
      <Transition>
        <Tooltip content={tooltipContent.goToTop} placement="right">
          <S.ToTopButton onClick={scrollToTop}>
            <IconRocket />
          </S.ToTopButton>
        </Tooltip>
      </Transition>
      <Transition>
        <S.SocialMenu>
          {socialLinks &&
            socialLinks.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} title={name}>
                  {name}
                </a>
              </li>
            ))}
        </S.SocialMenu>
      </Transition>
      <Transition>
        <div className="credentials">
          <p>{`© ${year} ${title}. ${footerContent.rights}`}</p>
          <p>
            {footerContent.built}
            {''}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> |{' '}
            {footerContent.host} <a href="https://www.netlify.com/">Netlify</a>
          </p>
        </div>
      </Transition>
    </S.Footer>
  );
};

export default Footer;
