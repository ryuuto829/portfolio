import styled, { css } from 'styled-components';

export const StyledTransition = styled.div`
  animation-fill-mode: both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  opacity: 0;

  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay};
    `};

  ${({ duration }) =>
    duration &&
    css`
      animation-duration: ${duration};
    `};

  ${({ inView, animation }) =>
    inView &&
    css`
      animation-name: ${animation};
    `};
`;
