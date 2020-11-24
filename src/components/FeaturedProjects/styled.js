import styled from 'styled-components';

export const Featured = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-gap: 2rem;
  border-radius: 15px;

  position: relative;
  /* padding: 8vh 0.5rem 5vh; */
  padding: 8vh 0 4vh;
  /* transform: skewY(10deg); */
  transform: skewY(4deg);
  text-align: left;

  @media (max-width: 925px) {
    grid-template-columns: initial;
    grid-gap: 3rem;
  }
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10rem;
  /* padding: 8vh 0 16vh; */
  padding: 8vh 0 12vh;
  justify-items: end;

  & > div {
    padding: 25px;
    background-color: ${({ theme }) => theme.colorBlock};
    /* transform: skewY(-10deg); */
    transform: skewY(-4deg);
    border-radius: 4px;
    width: 100%;
    display: flex;
    position: relative;

    max-width: 900px;

    &:nth-child(2n) {
      justify-self: start;
    }

    &:after {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      border-radius: 4px;
      content: '';
      z-index: -1;

      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      ${({ theme }) => theme.mixins.gradient};
    }
  }

  @media (max-width: 480px) {
    & > div {
      padding: 10px;
    }
  }
`;

export const ProjectImage = styled.div`
  grid-column: 1 / 8;
  align-self: start;

  transform: translateY(23px);

  a {
    display: block;
    width: 100%;
  }

  & img {
    filter: grayscale(50%);
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: var(--border-radius);
  }

  @media (max-width: 925px) {
    grid-column: unset;
    transform: none;
  }
`;

export const ProjectContent = styled.div`
  grid-column: 8 / 13;
  align-self: start;
  position: relative;

  transform: translateY(-46px);

  .project-overline {
    font-size: 14px;
    color: var(--light-blue);
    margin: 10px 0;
    position: absolute;
    top: -30px;
    left: 0;
  }

  .project-description {
    font-size: 17px;
  }

  @media (max-width: 925px) {
    grid-column: unset;
    transform: none;
  }
`;

export const CardHeader = styled.div`
  /* ${({ theme }) => theme.mixins.flexItemsBetween}; */

  /* fill: var(--light-gray); */
  /* margin-bottom: 40px; */
  margin-bottom: 15px;
  /* cursor: pointer; */
  position: relative;

  a {
    display: block;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  h3 {
    font-size: 30px;
    font-family: var(--family-secondary);
    margin: 0;
    font-size: clamp(26px, 5vw, 30px);
    padding-right: 30px;
  }

  h3,
  svg {
    transition: var(--transition);
  }

  &:hover {
    color: var(--light-blue);
    fill: var(--light-blue);

    h3 {
      transform: translateX(3px);
    }
  }
`;

export const TechList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  display: flex;
  flex-wrap: wrap;
`;

export const TechItem = styled.li`
  padding: 6px 12px;
  font-size: 12px;
  background-color: #333;
  color: #707886;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;
  /* flex-wrap: wrap; */

  & > a {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

export const Button = styled.a`
  ${({ theme }) => theme.mixins.smallButton};

  &:before {
    background-color: ${({ theme }) => theme.colorBlock};
  }

  @media (max-width: 480px) {
    svg {
      display: none;
    }
  }
`;
