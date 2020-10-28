import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ title }) => (
  <Helmet title={title}>
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string.isRequired
};
