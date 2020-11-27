import { keyframes } from 'styled-components';
import {
  // fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeInDown
} from 'react-animations';

// export const fadeInUpAnimation = keyframes`${fadeInUp}`;
export const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
export const fadeInRightAnimation = keyframes`${fadeInRight}`;
export const fadeInDownAnimation = keyframes`${fadeInDown}`;

// Export list of all animation for the <Transition /> component
export const AnimationList = {
  fadeInUp: fadeInUpAnimation,
  fadeInLeft: fadeInLeftAnimation,
  fadeInRight: fadeInRightAnimation,
  fadeInDown: fadeInDownAnimation
};
