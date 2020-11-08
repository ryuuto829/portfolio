import React from 'react';
import PropTypes from 'prop-types';
// import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
// import theme from '@styles/theme';

import { LocaleProvider, ThemeProvider } from '@hooks';
import SEO from '@components/SEO';

const Layout = ({ children }) => (
  <>
    <SEO title="Dmytro Rykhlyk" />
    <LocaleProvider>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </LocaleProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
