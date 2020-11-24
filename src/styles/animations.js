import { keyframes } from 'styled-components';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeInDown
} from 'react-animations';

export const fadeInUpAnimation = keyframes`${fadeInUp}`;
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
