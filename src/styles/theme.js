import mixins from './mixins';

const darkTheme = {
  mixins,

  colorMainBackground: 'var(--almost-black)',
  colorMainText: 'var(--light-gray)',
  colorBackgroundDimmed: 'var(--black-transparent)',
  colorActive: 'var(--white)'
};

const lightTheme = {
  mixins,

  colorMainBackground: 'var(--white)',
  colorMainText: 'var(--almost-black)',
  colorBackgroundDimmed: 'var(--white-transparent)',
  colorActive: 'var(--almost-black)'
};

export { darkTheme, lightTheme };
