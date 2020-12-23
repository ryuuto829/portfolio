import styled from 'styled-components';
import Tippy from '@tippyjs/react';

export const TippyBox = styled(Tippy)`
  font-size: var(--text-small);
  border-radius: var(--border-radius);
  padding: 0.5em 0.75em;
  /* background-color: var(--salmon); */
  background-color: ${({ theme }) => theme.primaryColor};
  /* color: var(--almost-black); */
  color: ${({ theme }) => theme.mainBackground};
  font-weight: var(--weight-normal);
`;
