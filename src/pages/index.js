import React from 'react';
import styled from 'styled-components';

import Navigation from '@components/Navigation';
import Layout from '@components/Layout';
import Hero from '@components/Hero';

const DUMMY_CONTENT = [...Array(40)].map((el, i) => <br key={i} />);

const App = () => (
  <Layout>
    <Nav>
      <Navigation />
      <Hero />
      {/* <section id="home">Home {DUMMY_CONTENT}</section> */}
      <section id="projects">Work {DUMMY_CONTENT}</section>
      <section id="about">About {DUMMY_CONTENT}</section>
      <section id="contact">Contact {DUMMY_CONTENT}</section>
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
