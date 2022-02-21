import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const userSlice = createSlice({
  name: "user",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
