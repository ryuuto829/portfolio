import React from 'react';
import PropTypes from 'prop-types';
import { Hero, Projects, About, Contact } from '@components';

const MainPage = ({ pageContext }) => {
  const { locale, isDefault } = pageContext;

  return (
    <main>
      <Hero locale={locale} />
      <Projects locale={locale} isDefault={isDefault} />
      <About locale={locale} />
      <Contact />
    </main>
  );
};

MainPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    isDefault: PropTypes.bool.isRequired
  })
};

export default MainPage;
