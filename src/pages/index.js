import React from 'react';
import {
  Navigation,
  Social,
  Hero,
  Projects,
  About,
  Contact,
  Footer
} from '@components';

const MainPage = () => (
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

export default MainPage;
