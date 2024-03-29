import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useTranslation } from '@hooks';
import { EmailLink, Transition } from '@components';

// Delayed after nav animation (in milliseconds)
const ANIMATION_DELAY = 100;

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  const Greeting = (
    <p className="greeting">
      <span role="img" aria-label={greeting}>
        👋{' '}
      </span>
      {greeting}
    </p>
  );
  const Title = <h1>{title}</h1>;
  const SubTitle = <h2>{subTitle}</h2>;
  const Bio = (
    <p className="bio">
      {smallBio}
      {/* NOTE: Resume link (hidden) */}
      {/* <a
        href={`/resume.${locale}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link">
        {downloadResume}
      </a> */}
    </p>
  );
  const GetInTouch = <EmailLink />;

  const content = [Greeting, Title, SubTitle, Bio, GetInTouch];

  return (
    <S.HeroSection id="home">
      {content &&
        content.map((component, i) => (
          <Transition delay={`${i * 100 + ANIMATION_DELAY}ms`} key={i}>
            {component}
          </Transition>
        ))}
    </S.HeroSection>
  );
};

Hero.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Hero;
