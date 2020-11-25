import React from 'react';
import * as S from './styled';
import { socialLinks } from '@config';
import { useIsMounted } from '@hooks';
import { Icon } from '@icons';
import { Tooltip, Transition } from '@components';

const Social = () => {
  const isMounted = useIsMounted();

  return (
    <S.SocialList>
      <ul>
        {socialLinks &&
          socialLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Transition
                delay={`${i * 100 + 900}ms`}
                animation="fadeInRight"
                skip={isMounted}>
                <Tooltip content={name} placement="left">
                  <a
                    href={url}
                    aria-label={name}
                    target="_blank"
                    title={name}
                    rel="noopener noreferrer">
                    <Icon name={name} />
                  </a>
                </Tooltip>
              </Transition>
            </li>
          ))}
      </ul>
    </S.SocialList>
  );
};

export default Social;
