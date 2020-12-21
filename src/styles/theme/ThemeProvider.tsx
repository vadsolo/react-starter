import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';

import { themes } from './themes';
import { isSystemDark } from './utils';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  return (
    <OriginalThemeProvider theme={isSystemDark ? themes.dark : themes.light}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
