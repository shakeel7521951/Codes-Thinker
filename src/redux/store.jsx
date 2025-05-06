import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import { userApi } from "./slices/UserApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
