import React from 'react';
import Layout from '@components/Layout';

// Pass all props to the layout component.
// Layout component includes all providers that all pages need to have access to.
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
