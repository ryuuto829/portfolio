import styled from 'styled-components';

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  /* position: relative; */
  margin-top: 50px;

  .project-content {
    background-color: ${({ theme }) => theme.colorBlock};
    padding: 2rem 1.75rem;
    border-radius: 4px;
    transition: var(--transition);
    position: relative;

    &:hover {
      transform: translateY(-5px);

      &:before {
        opacity: 1;
      }
    }

    :before {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      content: '';
      z-index: -1;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      ${({ theme }) => theme.mixins.gradient};
      transition: var(--transition);
      opacity: 0;
    }
  }

  .project-title {
    font-family: var(--family-secondary);
    margin: 0;
    font-size: 22px;
  }

  .project-description {
    font-weight: var(--weight-light);
    line-height: 1.2;
  }

  .project-techList {
    /* display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap; */
    padding: 0px;
    list-style: none;
    margin-bottom: 10px;
    color: var(--slate);

    /* li {
      font-size: 14px;
      line-height: 1.75;
    }

    li:not(:last-of-type) {
      margin-right: 15px;
    } */
  }

  .project-links {
    a {
      padding: 5px;
    }

    a:not(:last-of-type) {
      margin-right: 10px;
    }
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
