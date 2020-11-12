import mixins from './mixins';

const darkTheme = {
  mixins,

  colorMainBackground: 'var(--almost-black)',
  colorMainText: 'var(--light-gray)'
};

const lightTheme = {
  mixins,

  colorMainBackground: 'var(--white)',
  colorMainText: 'var(--almost-black)'
};

export { darkTheme, lightTheme };
