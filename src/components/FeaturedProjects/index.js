import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import * as S from './styled';
import { IconArrowForward, IconGithub, IconLink } from '@icons';

const FeaturedProjects = ({ projectsList }) => (
  <S.Showcase>
    {projectsList &&
      projectsList.map((project, i) => {
        const { title, about, technologies, featuredImage } = project;
        // add later external and github to const

        return (
          <div key={i}>
            <S.Featured>
              <S.ProjectImage>
                {featuredImage && (
                  <Img fluid={featuredImage.childImageSharp.fluid} />
                )}
              </S.ProjectImage>
              <S.ProjectContent>
                <p className="project-overline">Featured Project</p>
                <S.CardHeader>
                  <a href="/">
                    <h3>{title}</h3>
                    <IconArrowForward />
                  </a>
                </S.CardHeader>
                <p className="project-description">{about}</p>
                <S.TechList>
                  {technologies &&
                    technologies.map((tech, i) => (
                      <S.TechItem key={i}>{tech}</S.TechItem>
                    ))}
                </S.TechList>
                <S.ButtonGroup>
                  <S.Button>
                    <IconGithub />
                    <span>Github</span>
                  </S.Button>
                  <S.Button>
                    <IconLink />
                    <span>Demo</span>
                  </S.Button>
                </S.ButtonGroup>
              </S.ProjectContent>
            </S.Featured>
          </div>
        );
      })}
  </S.Showcase>
);

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
