import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../auth/slice'; // Import your auth slice
import languageReducer from "../language/languageSlice"; // Import your language slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth reducer
    language: languageReducer, // Add language reducer
  },
});

export default store;
