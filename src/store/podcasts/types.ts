export interface PodcastStructure {
  id: {
    attributes: {
      ["im:id"]: string;
    };
  };
  "im:image": [
    {
      label: string;
    },
  ];
  "im:name": {
    label: string;
  };
  "im:artist": {
    label: string;
  };
  summary: {
    label: string;
  };
}

export interface FeedResponse {
  feed: {
    entry: PodcastStructure[];
  };
}

export interface PodcastByIdStructure {
  collectionId: number;
  trackCount: number;
  artworkUrl600: string;
  collectionName: string;
  artistName: string;
  trackName: string;
  releaseDate: number;
  trackTimeMillis: number;
  episodes: EpisodeStructure[];
}

export interface EpisodeStructure {
  trackId: number;
  trackName: string;
  releaseDate: number;
  trackTimeMillis: number;
  trackViewUrl: string;
}

export interface PodcastStateStructure {
  podcasts: PodcastStructure[];
  selectedPodcast?: PodcastByIdStructure;
}
