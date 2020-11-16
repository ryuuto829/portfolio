import React from 'react';

import Navigation from '@components/Navigation';
import Hero from '@components/Hero';
import Social from '@components/Social';
import Footer from '@components/Footer';
import Projects from '@components/Projects';
import About from '@components/About';
import Contact from '@components/Contact';

const App = () => (
  <>
    <Navigation />
    <Social />
    <div id="content">
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
