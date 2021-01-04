import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from './selector';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
