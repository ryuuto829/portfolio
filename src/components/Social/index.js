import React from 'react';
import * as S from './styled';

import { socialLinks } from '@config';

import Icon from '@icons/Icon';
import Tooltip from '@components/Tooltip';

const Social = () => (
  <S.SideContainer>
    <S.SocialList>
      {socialLinks &&
        socialLinks.map(({ url, name }, i) => (
          <Tooltip key={i} content={name} placement="left">
            <S.SocialItem>
              <S.SocialLink
                href={url}
                aria-label={name}
                target="_blank"
                title={name}
                rel="noopener noreferrer">
                <Icon name={name} />
              </S.SocialLink>
            </S.SocialItem>
          </Tooltip>
        ))}
    </S.SocialList>
  </S.SideContainer>
);

export default Social;
