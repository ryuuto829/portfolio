import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '@styles';
import { LocaleProvider, ThemeProvider } from '@hooks';

import SEO from '@components/SEO';

const Layout = ({ children }) => (
  <LocaleProvider>
    <ThemeProvider>
      <GlobalStyle />

      <SEO />

      {children}
    </ThemeProvider>
  </LocaleProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
