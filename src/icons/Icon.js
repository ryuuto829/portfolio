import React from 'react';
import PropTypes from 'prop-types';
import { default as IconGithub } from '@icons/Github';
import { default as IconLinkedin } from '@icons/Linkedin';
import { default as IconCodepen } from '@icons/Codepen';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    default:
      return null;
  }
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
