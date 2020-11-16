import styled from 'styled-components';

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  /* position: relative; */
  margin-top: 50px;

  .project-card {
    background-color: #27272c;
    padding: 2rem 1.75rem;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
