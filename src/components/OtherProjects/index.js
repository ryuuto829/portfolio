import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useTheme } from '@hooks';
import { IconArrowForward, IconGithub, IconLink } from '@icons';
import { Transition, CardHeader, TechList } from '@components';

const OtherProjects = ({ projectsList }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <S.ProjectsList>
      {projectsList &&
        projectsList.map((project, i) => {
          const {
            title,
            about,
            technologies,
            slug,
            github,
            external
          } = project;
          // add later external and github to const

          return (
            <Transition key={i}>
              <div className="project-content" key={i}>
                <header>
                  <CardHeader>
                    <AniLink
                      paintDrip
                      to={slug}
                      hex={isDarkMode ? 'var(--dark-gray)' : '#fffef8'}>
                      <h3 className="project-title">{title}</h3>
                      <IconArrowForward />
                    </AniLink>
                  </CardHeader>
                  <p className="project-description">{about}</p>
                </header>
                <footer>
                  <TechList>
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </TechList>
                  <div className="project-links">
                    <a href={github} aria-label="Github" title="Github">
                      <IconGithub />
                    </a>
                    <a href={external} aria-label={title} title={title}>
                      <IconLink />
                    </a>
                  </div>
                </footer>
              </div>
            </Transition>
          );
        })}
    </S.ProjectsList>
  );
};

OtherProjects.propTypes = {
  projectsList: PropTypes.arrayOf(
    PropTypes.shape({
      about: PropTypes.string.isRequired,
      date: PropTypes.string,
      external: PropTypes.string,
      github: PropTypes.string,
      showInProjects: PropTypes.bool,
      title: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default OtherProjects;
