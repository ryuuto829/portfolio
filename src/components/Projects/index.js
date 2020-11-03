import React from 'react';
import * as S from './styled';

const Projects = () => (
  <S.Section id="projects">
    <h2>Featured Projects</h2>
    <S.Showcase>
      <S.Card>
        <S.Featured>
          <S.ProjectImage>
            <a href="https://placeholder.com/">
              <img src="https://via.placeholder.com/1000" alt="..." />
            </a>
          </S.ProjectImage>
          <S.ProjectContent>
            <S.Overline>Featured Project</S.Overline>
            <S.Title>Notes Keeper</S.Title>
            <S.Description>
              A minimal note taking app for creating pages sdfs sdfdsf sdf and
              sync with firebase strore. asd adas dA a sdfsd fsdfsd sd dasd
              asdad asda sda s
            </S.Description>
            <S.TechList>
              <S.TechItem>react</S.TechItem>
              <S.TechItem>redux</S.TechItem>
              <S.TechItem>firebase</S.TechItem>
            </S.TechList>
          </S.ProjectContent>
        </S.Featured>
      </S.Card>
    </S.Showcase>
  </S.Section>
);

export default Projects;
