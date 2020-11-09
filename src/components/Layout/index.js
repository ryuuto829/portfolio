import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '@styles';
import { LocaleProvider, ThemeProvider } from '@hooks';

import SEO from '@components/SEO';

const Layout = ({ children }) => (
  <>
    <SEO title="Dmytro Rykhlyk" />
    <LocaleProvider>
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </LocaleProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
