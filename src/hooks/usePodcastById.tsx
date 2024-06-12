import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const usePodcastDetailApi = () => {
  const { setPodcast } = useLocalStorage();

  const getPodcastById = useCallback(
    async (id: number) => {
      console.log("loading");

      const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        const podcastDescription = parsedData.results[0];
        const podcastEpisodes = parsedData.results.slice(
          1,
          parsedData.results.length,
        );
        const podcastData = {
          ...podcastDescription,
          episodes: podcastEpisodes,
        };

        setPodcast(podcastData);

        console.log("success");

        return podcastData;
      } catch {
        console.log("failed");
        throw new Error("Podcast details not found");
      }
    },
    [setPodcast],
  );

  return { getPodcastById };
};

export default usePodcastDetailApi;
