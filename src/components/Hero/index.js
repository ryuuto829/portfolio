import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import { IconEmail, IconDownload } from '@icons';
import Tooltip from '@components/Tooltip';

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  // Copy text to the clipboard on button click
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('rykhlyk.info@gmail.com');
  };

  return (
    <S.HeroSection id="home">
      <span>{greeting}</span>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{smallBio}</p>

      <S.LinksGroup>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume (235Kb, PDF)
            <span aria-hidden="true">
              <IconDownload />
            </span>
          </a>
        </li>

        <li>
          <a href="mailto:rykhlyk.info@gmail.com">
            rykhlyk.info@gmail.com
            <span aria-hidden="true">
              <IconEmail />
            </span>
          </a>
          <Tooltip
            content="Copied!"
            trigger="click"
            onShow={instance => {
              setTimeout(() => {
                instance.hide();
              }, 2000);
            }}>
            <button onClick={copyEmailToClipboard}>Copy</button>
          </Tooltip>
        </li>
      </S.LinksGroup>
    </S.HeroSection>
  );
};

export default Hero;
