import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import { authApi } from "./authApi";
import { userApi } from "./userApi"; // 👈 ADD THIS
import authReducer from "./authslice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { theaterApi } from "./theaterApi";
import { showtimeApi } from "./showtimeApi";
import { seatApi } from "./seatApi";
import { bookingApi } from "./bookingApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer, 
    [theaterApi.reducerPath]: theaterApi.reducer,
    [showtimeApi.reducerPath]: showtimeApi.reducer,
    [seatApi.reducerPath]: seatApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    // 👈 REGISTER userApi
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      authApi.middleware,
      userApi.middleware ,
      theaterApi.middleware,
      showtimeApi.middleware,
      seatApi.middleware,// 👈 REGISTER userApi middleware
      bookingApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
