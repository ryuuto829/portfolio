import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import 'tippy.js/animations/shift-away.css';

const Tooltip = ({ content, ...rest }) => (
  <S.TippyBox
    {...rest}
    content={content}
    delay={250}
    animation="shift-away"
    inertia
  />
);

Tooltip.propTypes = {
  content: PropTypes.string.isRequired
};

export default Tooltip;
