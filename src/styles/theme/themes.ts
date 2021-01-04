import { colors } from './colors';

const lightTheme = {
  primary: colors.aqua[200],
  primaryHover: colors.aqua[300],
  secondary: colors.aqua[200],
  disabled: colors.gray[100],

  dangerPrimary: colors.red[300],
  dangerHover: colors.red[400],

  warningPrimary: colors.yellow[300],
  warningHover: colors.yellow[400],

  successPrimary: colors.green[300],
  successHover: colors.green[400],

  primaryBorder: colors.gray[100],
  secondaryBorder: colors.blue[100],
  dangerBorder: colors.rose[100],
  warningBorder: colors.yellow[100],
  successBorder: colors.green[100],

  text: colors.black,
  textSecondary: colors.white,

  background: colors.lightgray[100],
  boxBackground: colors.lightgray[300], // or 400,

  inputBackground: colors.white,
  inputBorder: colors.lightgray[500],
  inputText: colors.gray[600],
  inputPlaceholder: colors.lightgray[500],

  navbarBackground: colors.lightgray[100],
};

const darkTheme: Theme = {
  primary: colors.aqua[400],
  primaryHover: colors.aqua[200],
  secondary: colors.blue[200],
  disabled: colors.gray[100],

  dangerPrimary: colors.rose[300],
  dangerHover: colors.rose[400],
  dangerBorder: colors.rose[100],

  warningPrimary: colors.yellow[300],
  warningHover: colors.yellow[400],

  successPrimary: colors.green[300],
  successHover: colors.green[400],

  primaryBorder: colors.gray[500],
  secondaryBorder: colors.blue[100],
  warningBorder: colors.yellow[100],
  successBorder: colors.green[100],

  text: colors.white,
  textSecondary: colors.black,

  background: colors.black,
  boxBackground: colors.gray[500], // or 500,

  inputBackground: colors.gray[400],
  inputBorder: colors.gray[500],
  inputText: colors.white,
  inputPlaceholder: colors.gray[100],

  navbarBackground: colors.gray[500],
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
