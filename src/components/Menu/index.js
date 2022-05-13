import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import * as S from './styled';
import { useClickOutside, useTheme, useIsMounted } from '@hooks';
import { localizedLink } from '@utils';
import { Switch, LanguagesMenu, ButtonTheming, Transition } from '@components';

const Menu = ({ navLinks, isDefault, locale }) => {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();
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
  useClickOutside(sidebarRef, closeSidebar);

  const onKeyDown = e => {
    // Close sidebar on pressing 'ESC'
    if (e.key === 'Escape') closeSidebar();
  };

  const onScreenResize = e => {
    // We've defined css rules to hide sidebar on wider screens and we
    // make sure that state is updated
    if (e.currentTarget.innerWidth > 768) closeSidebar();
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
          <LanguagesMenu locale={locale} isDefault={isDefault} />
        </S.ControlsMenu>

        <S.DrawerWrapper ref={sidebarRef}>
          <Transition
            skip={isMounted}
            delay="800ms"
            animation="fadeInLeft"
            style={{ position: 'relative', zIndex: '30' }}>
            <S.HamburgerButton onClick={toggleSidebar}>
              <S.Hamburger showSidebar={showSidebar} />
            </S.HamburgerButton>
          </Transition>

          <S.SideMenu
            showSidebar={showSidebar}
            aria-hidden={!showSidebar}
            tabIndex={showSidebar ? 1 : -1}>
            <div className="inner-content">
              <nav>
                <ul>
                  {navLinks &&
                    navLinks.map(({ name, url }, i) => (
                      <li key={i}>
                        <Link
                          to={localizedLink(url, locale, isDefault)}
                          onClick={closeSidebar}>
                          {name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
              <Switch isActive={isDarkMode} onChangeHandler={toggleTheme} />
              <LanguagesMenu
                showSidebar={showSidebar}
                locale={locale}
                isDefault={isDefault}
              />
            </div>
          </S.SideMenu>
        </S.DrawerWrapper>
      </S.MenuContainer>
    </>
  );
};

Menu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired,
  isDefault: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default Menu;
