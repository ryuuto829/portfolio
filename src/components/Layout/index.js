import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useLocale, useTranslation } from '@hooks';
import { Navigation, Social, SEO, Footer } from '@components';

if (typeof window !== 'undefined')
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');

const Layout = ({ children, locale, location }) => {
  const { changeLocale } = useLocale();
  const { skip } = useTranslation();

  // Check for home page: '/' or '/uk/'
  const isHome = location.pathname === (locale === 'en' ? '/' : `/${locale}/`);

  // Every time url changes we update our context store
  useEffect(() => {
    // Update current locale in useLocale
    changeLocale(locale);
  }, [locale]);

  return (
    <>
      <S.SkipLink href="#content">{skip}</S.SkipLink>

      <SEO />
      <Navigation isHome={isHome} />
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
  locale: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
