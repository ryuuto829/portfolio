import { keyframes } from 'styled-components';

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

export const fadeInDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Export list of all animation for the <Transition /> component
export const AnimationList = {
  fadeInUp: fadeInUpAnimation,
  fadeInDown: fadeInDownAnimation,
  fadeInLeft: fadeInLeftAnimation,
  fadeInRight: fadeInRightAnimation
};
