import styled, { css } from 'styled-components';

export const StyledTransition = styled.div`
  animation-fill-mode: both;
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
