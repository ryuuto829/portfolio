import mixins from './mixins';

const darkTheme = {
  mixins,

  mainBackground: 'var(--almost-black)',
  mainText: 'var(--light-gray)',
  bgTransparent: 'var(--black-transparent)',
  active: 'var(--white)',
  secondaryText: 'var(--slate)',
  bgContrast: 'var(--white-rgb)',
  block: 'var(--dark-gray)',
  selection: 'rgba(111, 66, 193, 0.8)',
  border: 'var(--almost-dark-gray)',
  primaryColor: 'var(--salmon)',
  techList: '#37373f'
};

const lightTheme = {
  mixins,

  // colorMainBackground: 'var(--extra-light-gray)',
  // mainBackground: '#f5f6f0',
  mainBackground: 'var(--white)',
  mainText: 'var(--almost-black)',
  // bgTransparent: 'var(--gray-transparent)',
  bgTransparent: 'var(--white-transparent)',
  active: 'var(--dark-slate)',
  secondaryText: 'var(--light-slate)',
  bgContrast: 'var(--black-rgb)',
  // block: 'var(--white)',
  // block: '#433a44',
  block: '#fffef8',
  selection: 'rgb(159, 107, 255, 0.55)',
  // border: 'var(--light-gray)',
  border: 'var(--light-gray)',
  // primaryColor: '#ff5037',
  primaryColor: '#fc4d35',
  techList: '#ffebcc'
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
