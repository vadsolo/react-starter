import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/rootReducer';
import { isSystemDark } from './utils';
import { themes } from './themes';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.dark : themes.light;
    }
    return themes[theme.selected];
  },
);
export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme],
  theme => theme.selected,
);
