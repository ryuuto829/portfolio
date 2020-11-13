import styled from 'styled-components';

export const Section = styled.section`
  /* max-width: 1000px;
  margin: 0px auto; */
`;

export const Card = styled.div`
  padding: 10px;
  background-color: #27272c;
  transform: skewY(-10deg);
  border-radius: 4px;
  width: 100%;
  display: flex;
  position: relative;
`;

export const Featured = styled.div`
  /* display: flex; */
  position: relative;
  /* padding: 8vh 2.5rem 5vh; */
  padding: 4rem 2.5rem 2rem;
  transform: skewY(10deg);
  text-align: left;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-gap: 2rem;
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
`;

export const ProjectImage = styled.div`
  grid-column: 1 / 8;
  align-self: start;

  & img {
    max-width: 100%;

    object-fit: cover;
    width: 100%;
  }
`;

export const ProjectContent = styled.div`
  grid-column: 8 / 13;
  align-self: start;
  position: relative;
`;

export const Overline = styled.p`
  font-size: 14px;
  color: var(--light-blue);
  margin: 10px 0;
  position: absolute;
  top: -30px;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: var(--family-secondary);
  margin: 0;
  /* margin: 0 0 20px 0; */
`;

export const Description = styled.p`
  font-size: 17px;
`;

export const TechList = styled.ul`
  ${({ theme }) => theme.mixins.list};
  display: flex;
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
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;

  & > button {
    &:first-child {
      margin: 0;
    }

    margin-left: 15px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.mixins.button};
  ${({ theme }) => theme.mixins.flexItemsCenter};
  transition: var(--transition);
  border-radius: 2px;
  font-size: 17px;

  padding: 6px 20px;
  position: relative;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #27272c;
  color: var(--light-gray);
  fill: var(--light-gray);

  & svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: transparent;
    color: white;
    fill: white;

    &:after {
      background-position: 100% 0;
    }
  }

  &:after {
    background-position: 0% 0;
    background-size: 200% 100%;
    transition: 0.7s all;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    content: '';
    z-index: -1;
    border-radius: 2px;

    /* background-image: linear-gradient(
      to right,
      #7b4397 0%,
      #dc2430 51%,
      #7b4397 100%
    ); */

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
  }
`;

export const CardHeader = styled.div`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  ${({ theme }) => theme.mixins.button};

  /* transition: var(--transition); */
  fill: var(--light-gray);
  margin-bottom: 40px;

  h1,
  svg {
    transition: var(--transition);
  }

  &:hover {
    color: var(--light-blue);
    fill: var(--light-blue);

    h1 {
      transform: translateX(3px);
      /* transition: var(--transition); */
    }
  }
`;
