import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import * as S from './styled';
import { useTheme } from '@hooks';
import {
  //  IconArrowForward
  IconGithub,
  IconLink
} from '@icons';
import { Transition } from '@components';

const FeaturedProjects = ({ projectsList }) => {
  const { theme } = useTheme();

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
                      hex={theme === 'dark' ? '#1d1c21' : '#f2f3f5'}>
                      <Img fluid={featuredImage.childImageSharp.fluid} />
                    </AniLink>
                  )}
                </div>
                {/* END OF THE IMAGE */}

                <div className="project-content">
                  {/* <div className="project-title"> */}
                  <p className="project-overline">Featured Project</p>
                  <S.CardHeader>
                    <AniLink
                      paintDrip
                      to={slug}
                      hex={theme === 'dark' ? '#1d1c21' : '#f2f3f5'}>
                      <h3>{title}</h3>
                      {/* <IconArrowForward /> */}
                    </AniLink>
                  </S.CardHeader>
                  {/* </div> */}
                  {/* END OF THE HEADER */}

                  <p className="project-description">{about}</p>
                  <S.TechList>
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </S.TechList>
                  <S.ButtonGroup>
                    <S.Button
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconGithub />
                      <span>Github</span>
                    </S.Button>
                    <S.Button
                      href={external}
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconLink />
                      <span>Demo</span>
                    </S.Button>
                  </S.ButtonGroup>
                </div>
                {/* END OF THE CONTENT */}
              </div>
            </Transition>
          );
        })}
    </S.Showcase>
  );
};

FeaturedProjects.propTypes = {
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

export default FeaturedProjects;
