import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { data } = action.payload;
      state.user = data;
      if (data === null) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
