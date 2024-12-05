import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'en', // Язык по умолчанию
  },
  reducers: {
    setLanguage(state, action) {
      state.currentLanguage = action.payload; // Устанавливаем текущий язык
    },
  },
});

// Экспортируем действия и редюсер
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer; 