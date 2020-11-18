import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import { CardHeader } from '@components/FeaturedProjects/styled';

import { IconArrowForward, IconGithub, IconLink } from '@icons';

const OtherProjects = ({ projectsList }) => (
  <S.ProjectsList>
    {projectsList &&
      projectsList.map((project, i) => {
        const { title, about, technologies } = project;
        // add later external and github to const

        return (
          <div className="project-content" key={i}>
            <header>
              <CardHeader>
                <h3 className="project-title">{title}</h3>
                <IconArrowForward />
              </CardHeader>
              <p className="project-description">{about}</p>
            </header>
            <footer>
              <ul className="project-techList">
                {technologies &&
                  technologies.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
              <div className="project-links">
                <a href="/">
                  <IconGithub />
                </a>
                <a href="/">
                  <IconLink />
                </a>
              </div>
            </footer>
          </div>
        );
      })}
  </S.ProjectsList>
);

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
