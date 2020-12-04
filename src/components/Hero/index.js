import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';
import { EmailLink, Transition } from '@components';

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  return (
    <S.HeroSection id="home">
      <Transition delay="500ms">
        <p className="greeting">{greeting}</p>
      </Transition>
      <Transition delay="600ms">
        <h1>{title}</h1>
      </Transition>
      <Transition delay="700ms">
        <h2>{subTitle}</h2>
      </Transition>
      <Transition delay="800ms">
        <p className="bio">
          {smallBio}{' '}
          <a href="/" className="resume-link">
            Download my Resume.
          </a>
        </p>
      </Transition>
      <Transition delay="900ms">
        <EmailLink />
      </Transition>
    </S.HeroSection>
  );
};

export default Hero;
