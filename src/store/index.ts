import { configureStore } from "@reduxjs/toolkit";
import { podcastsReducer } from "./podcasts/podcastsSlice";

export const store = configureStore({
  reducer: { podcastsState: podcastsReducer },
});

export type AppDispatch = typeof store.dispatch;
