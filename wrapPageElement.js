import React from 'react';
import AppProvider from '@components/AppProvider';

// Pass all props to the layout component.
// Layout component includes all providers that all pages need to have access to.
const wrapPageElement = ({ element, props }) => (
  <AppProvider {...props}>{element}</AppProvider>
);

export default wrapPageElement;
