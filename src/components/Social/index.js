import React from 'react';
import * as S from './styled';

import { socialLinks } from '@config';

import { Icon } from '@icons';
import { Tooltip, Transition } from '@components';

const Social = () => (
  <S.SideContainer>
    <S.SocialList>
      {socialLinks &&
        socialLinks.map(({ url, name }, i) => (
          <Transition
            key={i}
            delay={`${i * 100 + 900}ms`}
            animation="fadeInRight">
            <Tooltip content={name} placement="left">
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
          </Transition>
        ))}
    </S.SocialList>
  </S.SideContainer>
);

export default Social;
