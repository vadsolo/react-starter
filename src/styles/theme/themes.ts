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
  lightblack: '#3A3A3A',
  red: '#ff6471',
  rose: '#f7e5e9',
  green: '#2ecc71',
  yellow: '#f39c12',
};

const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  colors: { ...colors },
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  colors: { ...colors },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
