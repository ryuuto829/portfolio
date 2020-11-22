import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from './styled';

import { CardHeader } from '@components/FeaturedProjects/styled';

import { IconArrowForward, IconGithub, IconLink } from '@icons';

const OtherProjects = ({ projectsList }) => (
  <S.ProjectsList>
    {projectsList &&
      projectsList.map((project, i) => {
        const { title, about, technologies, slug, github, external } = project;
        // add later external and github to const

        return (
          <div className="project-content" key={i}>
            <header>
              <CardHeader>
                <Link to={slug}>
                  <h3 className="project-title">{title}</h3>
                  <IconArrowForward />
                </Link>
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
                <a href={external} target="_blank" rel="noopener noreferrer">
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
