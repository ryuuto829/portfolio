import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Helmet from 'react-helmet';
import { useLocale, useClickOutside, useTheme } from '@hooks';

import Switch from '@components/Switch';
import LanguagesMenu from '@components/LanguagesMenu';
import ButtonTheming from '@components/ButtonTheming';

const Menu = ({ navLinks }) => {
  const { locale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

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

  const onKeyDown = e => {
    // Close sidebar on pressing 'ESC'
    if (e.key === 'Escape') setShowSidebar(false);
  };

  const onScreenResize = e => {
    // We've defined css rules to hide sidebar on wider screens and we
    // make sure that state is updated
    if (e.currentTarget.innerWidth > 768) setShowSidebar(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onScreenResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onScreenResize);
    };
  }, []);

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
            <div>
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
              <Switch isActive={isDarkMode} onChangeHandler={toggleTheme} />
              <LanguagesMenu />
            </div>
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
