import { configureStore } from "@reduxjs/toolkit";
import currentNewsReducer from "./api/currentNews";
import loginReducer from "./api/auth/Loginslice";
import notificationReducer from "./api/NotifcationSlice";
import { NewsApi } from "./api/NewSlice";

export const store = configureStore({
  reducer: {
    currentNews: currentNewsReducer,
    login: loginReducer,
    notification: notificationReducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(NewsApi.middleware),
});
