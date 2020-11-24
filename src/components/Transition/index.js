import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useInView } from 'react-intersection-observer';
import { AnimationList } from '@styles/animations';

const Transition = ({
  children,
  delay,
  duration = '500ms',
  animation = 'fadeInUp'
}) => {
  // Intersection observer config: ref: func(node), inView: bool
  // https://github.com/thebuilder/react-intersection-observer#readme
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '20px 0px',
    triggerOnce: true
  });

  return (
    <S.StyledTransition
      ref={ref}
      inView={inView}
      animation={AnimationList[animation]}
      delay={delay}
      duration={duration}>
      {children}
    </S.StyledTransition>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.string,
  duration: PropTypes.string,
  animation: PropTypes.string
};

export default Transition;
