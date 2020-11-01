import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import Sidebar from '@components/Sidebar';
import NavigationLinks from '@components/NavigationLinks';

const Menu = ({ navLinks }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Prevent scrolling when sidebar is open and blur content
  useEffect(() => {
    showSidebar
      ? document.body.classList.add('blur')
      : document.body.classList.remove('blur');
  }, [showSidebar]);

  return (
    <>
      <Sidebar showSidebar={showSidebar}>
        {navLinks && <NavigationLinks listItems={navLinks} isAside />}
      </Sidebar>
      <S.Wrapper onClick={() => setShowSidebar(!showSidebar)}>
        <S.Hamburger showSidebar={showSidebar} />
      </S.Wrapper>
    </>
  );
};

Menu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired
};

export default Menu;
