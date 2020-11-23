import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '@hooks';
import { Navigation, Social, SEO, Footer } from '@components';

const Layout = ({ children, locale }) => {
  const { changeLocale } = useLocale();

  useEffect(() => {
    // Update current locale in useLocale
    changeLocale(locale);
  }, [locale]);

  return (
    <>
      <SEO />
      <Navigation />
      <Social />

      <div id="content">
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired
};

export default Layout;
