import React from 'react';
import * as S from './styled';

import { socialLinks } from '@config';

const Footer = () => (
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
    <S.Credit>© 2020 Dmytro Rykhlyk. All Rights Reserved.</S.Credit>
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

export default Footer;
