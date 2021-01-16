import styled from 'styled-components';

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 50px;
  text-align: left;

  .project-content {
    background-color: ${({ theme }) => theme.block};
    padding: 2rem 1.7rem;
    border-radius: var(--border-radius);
    transition: transform var(--easing);
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

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
      background: ${({ theme }) => theme.primaryColor};
      transition: opacity var(--easing);
      opacity: 0;
    }
  }

  .project-title {
    font-size: clamp(var(--text-normal), 6vw, 22px);

    &:hover {
      transform: none;
    }
  }

  .project-description {
    line-height: 1.3;
    margin-bottom: var(--space);
  }

  .project-links {
    margin-top: 15px;

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
