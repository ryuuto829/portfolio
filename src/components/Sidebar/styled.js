import styled from 'styled-components';

export const SideMenu = styled.aside`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  flex-direction: column;
  visibility: ${props => (props.showSidebar ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: black;
  transform: translateX(${props => (props.showSidebar ? '0' : '100vw')});
  transition: var(--transition);
  outline: 0;
  z-index: 10;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
