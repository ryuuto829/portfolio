import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import ContactButton from '@components/ContactButton';

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  return (
    <S.HeroSection id="home">
      <span>{greeting}</span>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{smallBio}</p>
      <ContactButton />
    </S.HeroSection>
  );
};

export default Hero;
