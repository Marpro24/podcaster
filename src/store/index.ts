import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { podcastsReducer } from "./podcasts/podcastsSlice";

export const store = configureStore({
  reducer: { podcastsState: podcastsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
