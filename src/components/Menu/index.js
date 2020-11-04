import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Helmet from 'react-helmet';
import { useLocale, useClickOutside } from '@hooks';

import Sidebar from '@components/Sidebar';
import Switch from '@components/Switch';
import LanguagesMenu from '@components/LanguagesMenu';

const Menu = ({ navLinks }) => {
  const { locale } = useLocale();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // Close sidebar on clicking outside the menu wrapper
  const sidebarRef = useRef();
  useClickOutside(sidebarRef, () => setShowSidebar(false));

  return (
    <>
      {/* Prevent scrolling when sidebar is open, apply blur filter */}
      <Helmet
        bodyAttributes={{
          class: showSidebar ? 'blur' : ''
        }}
      />
      <div ref={sidebarRef}>
        <S.Wrapper onClick={toggleSidebar}>
          <S.Hamburger showSidebar={showSidebar} />
        </S.Wrapper>
        <Sidebar showSidebar={showSidebar}>
          <S.Navigation>
            <S.NavigationList>
              {navLinks &&
                navLinks.map(({ name, url }, i) => (
                  <S.NavItem key={i}>
                    <S.NavLink
                      to={locale === 'en' ? url : `/${locale}${url}`}
                      data-title={name}
                      onClick={closeSidebar}>
                      {name}
                    </S.NavLink>
                  </S.NavItem>
                ))}
            </S.NavigationList>
          </S.Navigation>
          <Switch />
          <LanguagesMenu />
        </Sidebar>
      </div>
    </>
  );
};

Menu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired
};

export default Menu;
