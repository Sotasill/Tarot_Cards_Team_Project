import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isUserLoggedIn: false, // Default value
  },
  reducers: {
    login(state) {
      state.isUserLoggedIn = true; // Set to true on login
    },
    logout(state) {
      state.isUserLoggedIn = false; // Set to false on logout
    },
  },
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
