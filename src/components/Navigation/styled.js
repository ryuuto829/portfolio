import styled from 'styled-components';

export const NavWrapper = styled.header`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  font-weight: var(--weight-light);
  padding: 0px 40px;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  transition: top 0.3s;
`;

export const ControlsMenu = styled.div`
  display: flex;

  & > button {
    margin-right: 40px;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;

  & > ul {
    margin-left: 40px;
  }
`;
