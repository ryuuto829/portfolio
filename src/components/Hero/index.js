import React from 'react';
import * as S from './styled';

import { useTranslation } from '@hooks';

const Hero = () => {
  const { title, subTitle, greeting, smallBio } = useTranslation();

  return (
    <S.HeroSection id="home">
      <span>{greeting}</span>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{smallBio}</p>

      <S.LinksGroup>
        <li>
          <a href="/">
            <span className="text">Resume</span>
            <span className="circle" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                <rect fill="none" height="24" width="24" />
                <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
              </svg>
            </span>
          </a>
        </li>

        <li>
          <a href="mailto:rykhlyk.info@gmail.com">
            rykhlyk.info@gmail.com
            <span className="circle" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </span>
          </a>
          <button>Copy</button>
        </li>
      </S.LinksGroup>
    </S.HeroSection>
  );
};

export default Hero;
