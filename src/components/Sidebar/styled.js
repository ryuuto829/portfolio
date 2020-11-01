import styled from 'styled-components';

export const SideMenu = styled.aside`
  visibility: ${props => (props.showSidebar ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(75vw, 400px);
  height: 100vh;
  background-color: black;
  transform: translateX(${props => (props.showSidebar ? '0' : '100vw')});
  transition: var(--transition);
  z-index: 10;
`;
