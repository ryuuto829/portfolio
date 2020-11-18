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
  transform: skewY(10deg);
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
    background-color: #27272c;
    transform: skewY(-10deg);
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
      background: linear-gradient(
        269.16deg,
        #ffe580 -15.83%,
        #ff7571 -4.97%,
        #ff7270 15.69%,
        #ea5dad 32.43%,
        #c2a0fd 50.09%,
        #9867f0 67.47%,
        #3bf0e4 84.13%,
        #33ce43 105.13%,
        #b2f4b6 123.24%
      );
      background-position: 58% 50%;
      background-size: 500%;
      animation: gradient-shift 30s ease infinite;

      @keyframes gradient-shift {
        0% {
          background-position: 58% 50%;
        }
        25% {
          background-position: 100% 0%;
        }
        75% {
          background-position: 10% 50%;
        }
        to {
          background-position: 58% 50%;
        }
      }
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

  & img {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
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
  ${({ theme }) => theme.mixins.flexItemsBetween};

  fill: var(--light-gray);
  margin-bottom: 40px;

  h3 {
    font-size: 30px;
    font-family: var(--family-secondary);
    margin: 0;
    font-size: clamp(26px, 5vw, 30px);
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

  & > button {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.smallButton};

  &:before {
    background-color: #27272c;
  }

  @media (max-width: 480px) {
    svg {
      display: none;
    }
  }
`;
