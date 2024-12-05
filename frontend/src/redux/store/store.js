import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../language/languageSlice"; // Импортируем редюсер языка

const store = configureStore({
  reducer: {
    language: languageReducer, // Добавляем редюсер языка
    // другие редюсеры...
  },
});

export default store;
