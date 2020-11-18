import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import EmailLink from '@components/EmailLink';

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  return (
    <S.HeroSection id="home">
      <p className="greeting">{greeting}</p>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p className="bio">{smallBio}</p>
      <EmailLink />
    </S.HeroSection>
  );
};

export default Hero;
