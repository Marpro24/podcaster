import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  PodcastByIdStructure,
  PodcastStateStructure,
  PodcastStructure,
} from "./types";

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
    loadSelectedPodcast: (
      currentState,
      action: PayloadAction<PodcastByIdStructure>,
    ) => ({
      ...currentState,
      selectedPodcast: action.payload,
    }),
  },
});

export const podcastsReducer = podcastsSlice.reducer;
export const {
  loadPodcasts: loadPodcastsActionCreator,
  loadSelectedPodcast: loadSelectedPodcastActionCreator,
} = podcastsSlice.actions;
