import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

const About = () => {
  const { sectionsHeaders } = useTranslation();

  const SKILLS = [
    'JavaScript (ES6+)',
    'React',
    'HTML, (S)CSS',
    'Node.js',
    'Gatsby',
    'Typescript'
  ];

  return (
    <section id="about">
      <h2 className="section-header">{sectionsHeaders.about}</h2>
      <S.AboutInner>
        <div>
          <p>Hello! I'm Dmytro, a software engineer based in ..</p>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from University, I joined the engineering
            team at where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            {SKILLS.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
        <div id="foo">
          <img src="https://via.placeholder.com/274x274" alt="..." />
        </div>
      </S.AboutInner>
    </section>
  );
};

export default About;
