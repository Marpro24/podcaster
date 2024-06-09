import { PodcastByIdStructure } from "../store/podcasts/types";

const useLocalStorage = () => {
  const getPodcast = (collectionId: number) => {
    const cachedPodcastDetails = localStorage.getItem(
      `podcastDetails_${collectionId}`,
    );
    const cachedTime = localStorage.getItem(
      `podcastDetailsFetchTime_${collectionId}`,
    );

    if (cachedPodcastDetails && cachedTime) {
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date().getTime();

      if (today - parseInt(cachedTime, 10) < oneDay) {
        return JSON.parse(cachedPodcastDetails);
      }
    }
  };

  const setPodcast = (podcastData: PodcastByIdStructure) => {
    localStorage.setItem(
      `podcastDetails_${podcastData.collectionId}`,
      JSON.stringify(podcastData),
    );
    localStorage.setItem(
      `podcastDetailsFetchTime_${podcastData.collectionId}`,
      new Date().getTime().toString(),
    );
  };

  return { setPodcast, getPodcast };
};

export default useLocalStorage;
