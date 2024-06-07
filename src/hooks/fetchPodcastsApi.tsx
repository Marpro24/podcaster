import { useEffect, useState } from "react";
import { FeedResponse, PodcastStructure } from "../store/podcasts/types";

const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")}`;

const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useState<PodcastStructure[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchPodcastsApi = async () => {
    setStatus("loading");
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        const parsedData: FeedResponse = JSON.parse(data.contents);
        setPodcasts(parsedData.feed.entry);
        localStorage.setItem("podcasts", JSON.stringify(parsedData.feed.entry));
        localStorage.setItem(
          "podcastsFetchTime",
          new Date().getTime().toString(),
        );
        setStatus("success");
      } else {
        throw new Error("Bad network response");
      }
    } catch (error) {
      setError((error as Error).message);
      setStatus("failed");
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

    fetchPodcastsApi();
  }, []);

  return { podcasts, status, error };
};

export default useFetchPodcasts;
