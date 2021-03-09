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
import { default as IconDevto } from '@icons/Devto';
import { default as IconTwitter } from '@icons/Twitter';

const Icon = ({ name }) => {
  switch (name) {
    case 'github':
      return <IconGithub />;
    case 'linkedin':
      return <IconLinkedin />;
    case 'codepen':
      return <IconCodepen />;
    case 'arrowforward':
      return <IconArrowForward />;
    case 'link':
      return <IconLink />;
    case 'logo':
      return <IconLogo />;
    case 'sun':
      return <IconSun />;
    case 'moon':
      return <IconMoon />;
    case 'email':
      return <IconEmail />;
    case 'dev.to':
      return <IconDevto />;
    case 'twitter':
      return <IconTwitter />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
