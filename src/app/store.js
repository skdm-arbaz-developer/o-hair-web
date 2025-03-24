import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/userAuthAPI";
import  tokenSlice  from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: tokenSlice,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);
