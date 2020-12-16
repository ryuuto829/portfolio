import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useLocale, useTranslation } from '@hooks';
import { Navigation, Social, SEO, Footer } from '@components';

if (typeof window !== 'undefined')
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');

const Layout = ({ children, locale, location, isDefault }) => {
  const { changeLocale } = useLocale();
  const { skip } = useTranslation();

  // Check for home page: '/' or '/uk/'
  const isHome = location.pathname === (isDefault ? '/' : `/${locale}/`);

  // Every time url changes we update our context store
  useEffect(() => {
    changeLocale(locale);
  }, [locale]);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const updateExternalLinks = () => {
    const listOfLinks = Array.from(document.querySelectorAll('a'));

    if (listOfLinks.length > 0)
      listOfLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
  };

  useEffect(() => {
    updateExternalLinks();
  }, []);

  return (
    <>
      <S.SkipLink href="#content">{skip}</S.SkipLink>

      <SEO />
      <Navigation isHome={isHome} isDefault={isDefault} locale={locale} />
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
  location: PropTypes.object.isRequired,
  isDefault: PropTypes.bool.isRequired
};

export default Layout;
