import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const OtherProjects = ({ projectsList }) => (
  <S.ProjectsList>
    {projectsList &&
      projectsList.map((project, i) => {
        const { title, about } = project;
        // add later external and github to const

        return (
          <div className="project-card" key={i}>
            <header>
              <h3>{title}</h3>
              <p>{about}</p>
            </header>
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
