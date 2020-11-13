import mixins from './mixins';

const darkTheme = {
  mixins,

  colorMainBackground: 'var(--almost-black)',
  colorMainText: 'var(--light-gray)',
  colorBackgroundDimmed: 'var(--black-transparent)'
};

const lightTheme = {
  mixins,

  colorMainBackground: 'var(--white)',
  colorMainText: 'var(--almost-black)',
  colorBackgroundDimmed: 'var(--white-transparent)'
};

export { darkTheme, lightTheme };
