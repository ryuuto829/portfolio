import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '@styles';
import { LocaleProvider, ThemeProvider } from '@hooks';
import { Layout } from '@components';

// We'll make a distinction between <Layout /> and <AppProvider /> components
// to be able to use effects on <Layout /> without geting an error of using
// context outside the provider
// Issue: https://github.com/facebook/react/issues/18178
const AppProvider = ({
  children,
  pageContext: { locale, isDefault },
  location
}) => (
  <LocaleProvider>
    <ThemeProvider>
      <GlobalStyle />
      <Layout locale={locale} location={location} isDefault={isDefault}>
        {children}
      </Layout>
    </ThemeProvider>
  </LocaleProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    isDefault: PropTypes.bool.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export default AppProvider;
