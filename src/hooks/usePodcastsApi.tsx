import { useEffect, useState } from "react";
import { FeedResponse, PodcastStructure } from "../store/podcasts/types";

const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")}`;

const usePodcastsApi = () => {
  const [podcasts, setPodcasts] = useState<PodcastStructure[]>([]);
  const [status, setStatus] = useState<string>("");

  const getPodcastApi = async () => {
    setStatus("loading");
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const parsedData: FeedResponse = JSON.parse(data.contents);

      setPodcasts(parsedData.feed.entry);
      localStorage.setItem("podcasts", JSON.stringify(parsedData.feed.entry));
      localStorage.setItem(
        "podcastsFetchTime",
        new Date().getTime().toString(),
      );
      setStatus("success");
    } catch {
      setStatus("failed");
      throw new Error("Podcasts not found");
    }
  };

  useEffect(() => {
    const cachedPodcasts = localStorage.getItem("podcasts");
    const cachedTime = localStorage.getItem("podcastsFetchTime");

    if (cachedPodcasts && cachedTime) {
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date().getTime();

      if (today - parseInt(cachedTime, 10) < oneDay) {
        setPodcasts(JSON.parse(cachedPodcasts));
        setStatus("success");
        return;
      }
    }

    getPodcastApi();
  }, []);

  return { podcasts, status };
};

export default usePodcastsApi;
