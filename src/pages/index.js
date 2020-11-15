import React from 'react';

import Navigation from '@components/Navigation';
import Hero from '@components/Hero';
import Social from '@components/Social';
import Footer from '@components/Footer';
import Projects from '@components/Projects';
import About from '@components/About';
import Contact from '@components/Contact';
import Blog from '@components/Blog';

const App = () => (
  <>
    <Navigation />
    <Social />
    <div id="content">
      <main>
        <Hero />
        <Projects />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
