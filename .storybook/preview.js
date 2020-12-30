import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../src/styles/theme/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: themes.light.background,
      },
      {
        name: 'Dark',
        value: themes.dark.background,
      },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Light',
    toolbar: {
      icon: 'switchalt',
      // array of plain string values or MenuItem shape (see below)
      items: ['Light', 'Dark'],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme.toLowerCase();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
