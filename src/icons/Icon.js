import React from 'react';
import PropTypes from 'prop-types';

import { default as IconGithub } from '@icons/Github';
import { default as IconLinkedin } from '@icons/Linkedin';
import { default as IconCodepen } from '@icons/Codepen';
import { default as IconArrowForward } from '@icons/ArrowForward';
import { default as IconLink } from '@icons/Link';
import { default as IconLogo } from '@icons/Logo';
import { default as IconSun } from '@icons/Sun';
import { default as IconMoon } from '@icons/Moon';
import { default as IconEmail } from '@icons/Email';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'ArrowForward':
      return <IconArrowForward />;
    case 'Link':
      return <IconLink />;
    case 'Logo':
      return <IconLogo />;
    case 'Sun':
      return <IconSun />;
    case 'Moon':
      return <IconMoon />;
    case 'Email':
      return <IconEmail />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
