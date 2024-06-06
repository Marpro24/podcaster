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

export interface PodcastStateStructure {
  podcasts: PodcastStructure[];
}
