import styled from 'styled-components';

export const SocialList = styled.div`
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  z-index: 100;

  a {
    padding: 10px;
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 1080px) {
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
