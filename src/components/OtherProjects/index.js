import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as S from './styled';
import { useTheme } from '@hooks';
import { CardHeader } from '@components/FeaturedProjects/styled';
import { IconArrowForward, IconGithub, IconLink } from '@icons';
import { Transition } from '@components';

const OtherProjects = ({ projectsList }) => {
  const { theme } = useTheme();

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
                      hex={theme === 'dark' ? '#1d1c21' : '#f2f3f5'}>
                      <h3 className="project-title">{title}</h3>
                      <IconArrowForward />
                    </AniLink>
                  </CardHeader>
                  <p className="project-description">{about}</p>
                </header>
                <footer>
                  <ul className="project-techList">
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <IconGithub />
                    </a>
                    <a
                      href={external}
                      target="_blank"
                      rel="noopener noreferrer">
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
