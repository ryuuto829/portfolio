import React from 'react';
import styled from 'styled-components';

import Navigation from '@components/Navigation';
import Layout from '@components/Layout';

const App = () => (
  <Layout>
    <Nav>
      <Navigation />
      {/* Add dummy content for scroll */}
      {[...Array(40)].map((el, i) => (
        <br key={i} />
      ))}
      {/* Delete */}
    </Nav>
  </Layout>
);

const Nav = styled.div`
  & > svg {
    user-select: none;
    fill: white;

    &:hover {
      cursor: pointer;
      fill: red;
    }
  }
`;

export default App;
