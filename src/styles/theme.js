import mixins from './mixins';

const darkTheme = {
  mixins,

  colorMainBackground: 'var(--almost-black)',
  colorMainText: 'var(--light-gray)'
};

const lightTheme = {
  mixins,

  colorMainBackground: 'var(--light-mode-1)',
  colorMainText: 'var(--light-mode-2)'
};

export { darkTheme, lightTheme };
