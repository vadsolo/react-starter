import { colors } from './colors';

const lightTheme = {
  primary: colors.bluepurple[400],
  secondary: colors.blue[200],

  primaryBorder: colors.bluepurple[300],
  secondaryBorder: colors.blue[100],

  text: colors.black,
  textSecondary: colors.white,

  background: colors.lightgray[100],
  boxBackground: colors.lightgray[300], // or 400,

  inputBackground: colors.white,
  inputBorder: colors.lightgray[500],
  inputText: colors.gray[600],
  inputPlaceholder: colors.lightgray[500],
};

const darkTheme: Theme = {
  primary: colors.bluepurple[400],
  secondary: colors.blue[200],

  primaryBorder: colors.bluepurple[300],
  secondaryBorder: colors.blue[100],

  text: colors.white,
  textSecondary: colors.black,

  background: colors.black,
  boxBackground: colors.gray[500], // or 500,

  inputBackground: colors.gray[400],
  inputBorder: colors.gray[500],
  inputText: colors.white,
  inputPlaceholder: colors.gray[100],
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
