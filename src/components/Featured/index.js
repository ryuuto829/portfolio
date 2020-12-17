import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import { useTheme, useTranslation } from '@hooks';
import { IconGithub, IconLink } from '@icons';
import { Transition, CardHeader, TechList } from '@components';

const Featured = ({ projectsList }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const { featured } = useTranslation();

  return (
    <S.Showcase>
      {projectsList &&
        projectsList.map((project, i) => {
          const {
            title,
            about,
            technologies,
            featuredImage,
            github,
            external,
            slug
          } = project;

          return (
            <Transition key={i}>
              <div className="project-featured">
                <div className="project-image">
                  {featuredImage && (
                    <AniLink
                      paintDrip
                      to={slug}
                      hex={isDarkMode ? '#1d1c21' : '#f2f3f5'}>
                      <Img
                        fluid={featuredImage.childImageSharp.fluid}
                        alt={title}
                      />
                    </AniLink>
                  )}
                </div>
                {/* END OF THE IMAGE */}

                <div className="project-content">
                  <p className="project-overline">{featured}</p>
                  <CardHeader>
                    <AniLink
                      paintDrip
                      to={slug}
                      hex={isDarkMode ? '#1d1c21' : '#f2f3f5'}>
                      <h3>{title}</h3>
                    </AniLink>
                  </CardHeader>
                  {/* END OF THE HEADER */}

                  <p className="project-description">{about}</p>
                  <TechList>
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </TechList>
                  <S.LinkGroup>
                    <a href={github} aria-label="Github" title="Github">
                      <IconGithub />
                      <span>Github</span>
                    </a>
                    <a href={external} aria-label={title} title={title}>
                      <IconLink />
                      <span>Demo</span>
                    </a>
                  </S.LinkGroup>
                </div>
                {/* END OF THE CONTENT */}
              </div>
            </Transition>
          );
        })}
    </S.Showcase>
  );
};

Featured.propTypes = {
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

export default Featured;
