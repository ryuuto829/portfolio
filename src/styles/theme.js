import mixins from './mixins';

const darkTheme = {
  mixins,

  colorMainBackground: 'var(--almost-black)',
  colorMainText: 'var(--light-gray)',
  bgTransparent: 'var(--black-transparent)',
  colorActive: 'var(--white)',
  colorSecondaryText: 'var(--slate)',
  colorBackgroundContrast: 'var(--white-rgb)',
  colorBlock: 'var(--dark-gray)',
  colorSelection: 'rgba(111, 66, 193, 0.8)'
};

const lightTheme = {
  mixins,

  colorMainBackground: 'var(--extra-light-gray)',
  colorMainText: 'var(--almost-black)',
  bgTransparent: 'var(--gray-transparent)',
  colorActive: 'var(--dark-slate)',
  colorSecondaryText: 'var(--dark-slate)',
  colorBackgroundContrast: 'var(--black-rgb)',
  colorBlock: 'var(--white)',
  colorSelection: 'rgb(159, 107, 255, 0.55)'
  // colorMainBackground: 'var(--extra-light-gray)',
  // colorMainText: 'var(--almost-black)',
  // colorBackgroundDimmed: 'var(--gray-transparent)',
  // colorActive: 'var(--dark-slate)',
  // colorSecondaryText: 'var(--dark-slate)',
  // colorBackgroundContrast: 'var(--black-rgb)',
  // colorBlock: 'var(--white)',
  // colorSelection: 'rgb(159, 107, 255, 0.55)'
};

export { darkTheme, lightTheme };
