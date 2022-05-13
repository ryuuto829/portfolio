import styled from 'styled-components';

// Read more: https://css-tricks.com/how-to-create-a-skip-to-content-link/
export const SkipLink = styled.a`
  position: fixed;
  top: 0;
  left: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: var(--almost-black);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 6px;
  transform: translate(-50%, -100%);
  transition: var(--transition);
  z-index: -20;
  outline: 0;

  &:focus,
  &:active {
    color: var(--almost-black);
    transform: translate(-50%, 0%);
    z-index: 100;
  }
`;
