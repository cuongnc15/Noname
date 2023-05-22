import  { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice ({
    name: "Authentication",
    initialState: (localStorage.getItem("userAccount")) || {
      token: null,
      isLogin: false,
      isRegistered: false,
      showLoginForm: false,
    },
    reducers: {
      loginHandler(state: any, action: any) {
        state.token = action.payload;
        state.isLogin = !!state.token;
      },
      logoutHandler(state: any) {
        state.token = null;
        state.isLogin = !!state.token;
      },
      registerHandler(state: any) {
        state.isRegistered = true;
      },
      showLoginFormHandler(state: any) {
        state.showLoginForm = !state.showLoginForm;
      },
    },
});
  export const authAction = authSlice.actions;

  const store = configureStore({
    reducer: {auth: authSlice.reducer },
  });
  export default store;