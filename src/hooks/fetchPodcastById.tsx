import { FeedResponse, PodcastStructure } from "../store/podcasts/types";

const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")}`;

const fetchPodcastsFromAPI = async (): Promise<PodcastStructure[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const data = await response.json();
  const parsedData: FeedResponse = JSON.parse(data.contents);
  return parsedData.feed.entry;
};

const fetchPodcastById = async (
  id: string,
): Promise<PodcastStructure | null> => {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date().getTime();

  const cachedPodcasts = localStorage.getItem("podcasts");
  const cachedTime = localStorage.getItem("podcastsFetchTime");

  if (
    cachedPodcasts &&
    cachedTime &&
    today - parseInt(cachedTime, 10) < oneDay
  ) {
    const podcasts: PodcastStructure[] = JSON.parse(cachedPodcasts);
    const podcast = podcasts.find((p) => p.id.attributes["im:id"] === id);
    return podcast || null;
  }

  try {
    const podcasts = await fetchPodcastsFromAPI();
    localStorage.setItem("podcasts", JSON.stringify(podcasts));
    localStorage.setItem("podcastsFetchTime", today.toString());
    const podcast = podcasts.find((p) => p.id.attributes["im:id"] === id);
    return podcast || null;
  } catch (error) {
    console.error("Failed to fetch podcas:t", error);
    return null;
  }
};

export default fetchPodcastById;
