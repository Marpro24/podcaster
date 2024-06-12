import { Link, useParams } from "react-router-dom";
import usePodcastDetailApi from "../../hooks/usePodcastById";
import PodcastDetailStyled from "./PodcastDetailStyled";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadSelectedPodcastActionCreator } from "../../store/podcasts/podcastsSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

export const PodcastDetail = (): React.ReactElement => {
  const { podcastId } = useParams();
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

  return podcastDetails && podcastDetails.collectionId === +podcastId! ? (
    <PodcastDetailStyled>
      <div className="detail-card">
        <Link to={`/`}>
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
      <div>
        <div className="episodes-count">
          <span className="episodes-count__text">
            Episodes: {podcastDetails.trackCount}{" "}
          </span>
        </div>
        <div className="episodes-container">
          <div className="episodes-container__info">
            <span className="episodes-container__header-title"> Title</span>
            <span className="episodes-container__header-date">Date</span>
            <span className="episodes-container__header-duration">
              Duration
            </span>
          </div>

          {podcastDetails.episodes.map((episode) => (
            <ul className="episode-list" key={episode.trackId}>
              <li className="episode-list-episode">
                <span className="episode-title">{episode.trackName} </span>
                <span className="episode-date">
                  {new Date(episode.releaseDate).toLocaleDateString()}
                </span>
                <span className="episode-duration">
                  {Math.floor(episode.trackTimeMillis / 60000)}
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </PodcastDetailStyled>
  ) : (
    <></>
  );
};

export default PodcastDetail;
