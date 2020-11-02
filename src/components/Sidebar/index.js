import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Sidebar = ({ children, showSidebar }) => (
  <S.SideMenu
    showSidebar={showSidebar}
    aria-hidden={!showSidebar}
    tabIndex={showSidebar ? 1 : -1}>
    {children}
  </S.SideMenu>
);

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Sidebar;
