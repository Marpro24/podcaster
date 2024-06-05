import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PodcastStateStructure, PodcastStructure } from "./types";

export const initialPodcastsState: PodcastStateStructure = {
  podcasts: [],
};

const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: initialPodcastsState,
  reducers: {
    loadPodcasts: (
      currentState,
      action: PayloadAction<PodcastStructure[]>,
    ): PodcastStateStructure => ({
      ...currentState,
      podcasts: action.payload,
    }),
  },
});

export const podcastsReducer = podcastsSlice.reducer;
export const { loadPodcasts: loadPodcastsActionCreator } =
  podcastsSlice.actions;
