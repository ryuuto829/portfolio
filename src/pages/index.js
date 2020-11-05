import React from 'react';

import Navigation from '@components/Navigation';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import Social from '@components/Social';
import Footer from '@components/Footer';
import Projects from '@components/Projects';

const DUMMY_CONTENT = [...Array(40)].map((el, i) => <br key={i} />);

const App = () => (
  <Layout>
    <Navigation />
    <Social />
    <div id="content">
      <main>
        <Hero />
        <Projects />
        {/* <section id="home">Home {DUMMY_CONTENT}</section> */}
        {/* <section id="projects">Work {DUMMY_CONTENT}</section> */}
        <section id="about">About {DUMMY_CONTENT}</section>
        <section id="contact">Contact {DUMMY_CONTENT}</section>
      </main>
      <Footer />
    </div>
  </Layout>
);

// const Content = styled.main`
//   padding: 0px 100px;

//   max-width: 1600px;
//   min-height: 100vh;
//   margin: 0px auto;
//   width: 100%;
// `;

export default App;
