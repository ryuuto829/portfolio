import styled from 'styled-components';

export const Section = styled.section``;

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
  display: flex;
  position: relative;
  /* flex-direction: column; */
  flex-grow: 1;
  padding: 8vh 2.5rem 5vh;
  transform: skewY(10deg);
  text-align: left;
`;

export const Showcase = styled.div`
  display: grid;
  justify-items: center;
  padding-left: 0;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
`;

export const ProjectImage = styled.div`
  & img {
    max-width: 100%;
  }
`;

export const ProjectContent = styled.div``;

export const Overline = styled.p`
  font-size: 14px;
  color: var(--light-blue);
  margin: 10px 0;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: var(--family-secondary);
  margin: 0 0 20px 0;
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
