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
  mainBackground: 'var(--white)',
  mainText: 'var(--almost-black)',
  bgTransparent: 'var(--white-transparent)',
  active: 'var(--dark-slate)',
  secondaryText: 'var(--light-slate)',
  bgContrast: 'var(--black-rgb)',
  block: '#fff',
  selection: 'rgb(159, 107, 255, 0.55)',
  border: 'var(--light-gray)',
  primaryColor: '#fc4d35',
  techList: '#ffebcc'
};

export { darkTheme, lightTheme };
