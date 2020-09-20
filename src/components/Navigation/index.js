import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';

import Logo from '../icons/Logo';
import NavigationLinks from '../NavigationLinks';

const Navigation = () => (
  <>
    <Link to="/" aria-label="home">
      <Logo />
    </Link>
    <NavigationLinks listItems={navLinks} />
  </>
);

export default Navigation;
