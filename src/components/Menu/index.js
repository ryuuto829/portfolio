import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Helmet from 'react-helmet';
import { useLocale, useClickOutside } from '@hooks';

import Switch from '@components/Switch';
import LanguagesMenu from '@components/LanguagesMenu';
import ButtonTheming from '@components/ButtonTheming';

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

      <S.MenuContainer>
        <S.ControlsMenu showSidebar={showSidebar}>
          <ButtonTheming />
          <LanguagesMenu />
        </S.ControlsMenu>

        <S.Wrapper ref={sidebarRef}>
          <S.Button onClick={toggleSidebar}>
            <S.Hamburger showSidebar={showSidebar} />
          </S.Button>
          <S.SideMenu
            showSidebar={showSidebar}
            aria-hidden={!showSidebar}
            tabIndex={showSidebar ? 1 : -1}>
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
          </S.SideMenu>
        </S.Wrapper>
      </S.MenuContainer>
    </>
  );
};

Menu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired
};

export default Menu;
