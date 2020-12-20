import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { themes } from './themes';
import { getThemeFromStorage, isSystemDark } from './utils';
// import { useSelector } from 'react-redux';
// import { selectTheme, themeSliceKey, reducer } from './slice';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  // const theme = useSelector(selectTheme);
  const selected = getThemeFromStorage() || 'system';
  let theme = themes.light;
  if (selected === 'system') {
    theme = isSystemDark ? themes.dark : themes.light;
  }

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
