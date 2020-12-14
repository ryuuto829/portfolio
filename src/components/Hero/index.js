import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useTranslation } from '@hooks';
import { EmailLink, Transition } from '@components';

const Hero = ({ locale }) => {
  const {
    title,
    subTitle,
    greeting,
    smallBio,
    downloadResume
  } = useTranslation();

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
          <a href={`/resume.${locale}.pdf`} className="resume-link">
            <span className="link">{downloadResume}</span>
          </a>
        </p>
      </Transition>
      <Transition delay="900ms">
        <EmailLink />
      </Transition>
    </S.HeroSection>
  );
};

Hero.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Hero;
