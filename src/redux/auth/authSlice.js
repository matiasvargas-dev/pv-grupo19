import { createSlice } from "@reduxjs/toolkit";

const getSession = () => {
  const session = localStorage.getItem("sessionUser");
  return session ? JSON.parse(session) : null;
};

const initialState = {
  user: getSession(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout, clearError } =
  authSlice.actions;
export default authSlice.reducer;
