import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@styles';

// Available theming modes
const DARK_THEME_MODE = 'dark';
const LIGHT_THEME_MODE = 'light';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DARK_THEME_MODE);

  const setMode = mode => {
    // If there is no such a mode, return with no changes
    if (![DARK_THEME_MODE, LIGHT_THEME_MODE].includes(mode)) return;

    // Store current theme mode in context and localStorage
    try {
      window.localStorage.setItem('theme', mode);
    } catch (error) {
      // return;
    }
    setTheme(mode);
  };

  useEffect(() => {
    let localTheme;

    try {
      localTheme = window.localStorage.getItem('theme');
    } catch (error) {
      localTheme = null;
    }

    // Check if there is any prefers modes or localStorage
    if (
      window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme: ${DARK_THEME_MODE})`).matches &&
      !localTheme
    )
      setMode(DARK_THEME_MODE);
    else localTheme ? setMode(localTheme) : setMode(LIGHT_THEME_MODE);
  }, []);

  const toggleTheme = () => {
    setMode(theme === DARK_THEME_MODE ? LIGHT_THEME_MODE : DARK_THEME_MODE);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider
        theme={theme === DARK_THEME_MODE ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within an ThemeContext');

  return context;
};

export { ThemeProvider, useTheme };
