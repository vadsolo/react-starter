const colors = {
  blue: '#5e81f4',
  darkblue: '#4d4cac',
  lightpurple: '#9698d6',
  purple: '#6c63ff',
  white: '#FFF',
  lightergray: '#f5f5f7',
  lightgray: '#f5f5fb',
  textgray: '#c7c7da',
  black: '#2f2f3a',
  lightblack: 'rgb(66, 66, 66, 0.2)',
  lightBlack2: 'rgb(66, 66, 66)',
  red: '#ff6471',
  rose: '#f7e5e9',
  green: '#2ecc71',
  yellow: '#f39c12',
};

const lightTheme = {
  primary: colors.blue,
  text: colors.black,
  textSecondary: colors.lightgray,
  background: colors.lightgray,
  border: colors.lightblack,
  borderLight: colors.lightBlack2,
  colors: { ...colors },
};

const darkTheme: Theme = {
  primary: colors.darkblue,
  text: colors.white,
  textSecondary: colors.lightgray,
  background: colors.lightBlack2,

  border: colors.lightgray,
  borderLight: colors.textgray,
  colors: { ...colors },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
