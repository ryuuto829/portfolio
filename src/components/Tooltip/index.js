import * as React from 'react';
import PropTypes from 'prop-types';
import 'tippy.js/animations/shift-away.css';
import * as S from './styled';

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
  // children: React.Node.isRequired,
  // className: PropTypes.string,
  // placement: 'top' | 'bottom' | 'left' | 'right'
};

export default Tooltip;
