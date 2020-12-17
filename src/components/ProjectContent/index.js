import styled from 'styled-components';

export const CardHeader = styled.div`
  position: relative;

  a {
    display: block;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  h3 {
    font-size: 30px;
    font-family: var(--family-secondary);
    margin: 0;
    font-size: clamp(26px, 5vw, 30px);
    margin-bottom: 20px;
  }

  h3,
  svg {
    transition: var(--transition);
  }

  &:hover {
    h3 {
      color: ${({ theme }) => theme.active};
      transform: translateX(3px);
    }
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    display: inline-block;
    font-size: 12px;
    font-weight: var(--weight-semibold);
    border: 1px solid transparent;
    border-radius: 2em;
    padding: 0 10px;
    line-height: 22px;
    color: var(--light-gray);
    background-color: #37373f;
    margin: 0 0.125em 0.333em 0;
  }
`;
