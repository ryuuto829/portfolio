// We're setting wrapper component around pages that won’t get unmounted on page changes.
// See: https://www.gatsbyjs.org/docs/browser-apis/

import Layout from './wrapPageElement';

export const wrapPageElement = Layout;
