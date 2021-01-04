import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThemeState, ThemeKeyType } from './types';

import { getThemeFromStorage } from './utils';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
