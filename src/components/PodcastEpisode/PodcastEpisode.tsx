import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePodcastDetailApi from "../../hooks/usePodcastById";
import { loadSelectedPodcastActionCreator } from "../../store/podcasts/podcastsSlice";
import useLocalStorage from "../../hooks/useLocalStorage";
import PodcastEpisodeStyled from "./PodcastEpisodeStyled";

const PodcastEpisode = (): React.ReactElement => {
  const { podcastId, trackId } = useParams();
  const { getPodcast } = useLocalStorage();
  const { getPodcastById } = usePodcastDetailApi();
  const dispatch = useAppDispatch();
  const podcastDetails = useAppSelector(
    (state) => state.podcastsState.selectedPodcast,
  );

  useEffect(() => {
    const fetchedPodcast = async () => {
      const cachedPodcast = getPodcast(+podcastId!);
      if (cachedPodcast) {
        dispatch(loadSelectedPodcastActionCreator(cachedPodcast));
      } else {
        const podcastDetails = await getPodcastById(+podcastId!);
        dispatch(loadSelectedPodcastActionCreator(podcastDetails));
      }
    };

    if (!podcastDetails || podcastDetails.collectionId !== +podcastId!) {
      fetchedPodcast();
    }
  }, [getPodcastById, podcastId, dispatch, getPodcast, podcastDetails]);

  const episode = podcastDetails?.episodes.find(
    (ep) => ep.trackId === +trackId!,
  );

  return (
    <PodcastEpisodeStyled>
      <div className="detail-card">
        <Link to={`/podcast/${podcastId}`}>
          <img
            className="detail-card__image"
            src={podcastDetails?.artworkUrl600}
            alt={podcastDetails?.collectionName}
            width={140}
            height={140}
          />
        </Link>
        <div className="detail-card__credits">
          <span className="detail-card__title">
            {podcastDetails?.collectionName}
          </span>
          <span className="detail-card__author">
            by {podcastDetails?.artistName}
          </span>
        </div>
        <p className="detail-card__description">Description:</p>
        <div className="detail-card__summary">
          {podcastDetails?.collectionName}
        </div>
      </div>
      <figure className="episode-container">
        <figcaption className="episode-title">
          {" "}
          {episode?.trackName}{" "}
        </figcaption>
        <p className="episode-description"> {episode?.description} </p>
        <audio className="episode-audio" controls>
          {" "}
          <source src={episode?.episodeUrl} type="audio/mpeg" />{" "}
        </audio>
      </figure>
    </PodcastEpisodeStyled>
  );
};

export default PodcastEpisode;
