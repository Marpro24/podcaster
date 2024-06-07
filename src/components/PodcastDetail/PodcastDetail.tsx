import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PodcastStructure } from "../../store/podcasts/types";
import fetchPodcastById from "../../hooks/fetchPodcastById";
import PodcastDetailStyled from "./PodcastDetailStyled";

const PodcastDetail = (): React.ReactElement => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const [podcast, setPodcast] = useState<PodcastStructure | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPodcast = async () => {
      setLoading(true);

      if (podcastId) {
        try {
          const fetchedPodcast = await fetchPodcastById(podcastId);

          if (fetchedPodcast) {
            setPodcast(fetchedPodcast);
            setError(null);
          } else {
            setError("Podcast not found");
          }
        } catch (e) {
          setError("Failed to fetch podcast details");
        }
      } else {
        setError("No podcast ID provided");
      }
      setLoading(false);
    };

    getPodcast();
  }, [podcastId]);

  if (loading) {
    return <div>Your podcast is loading</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!podcast) {
    return <div>No podcast found</div>;
  }

  const {
    summary,
    "im:artist": artist,
    "im:image": image,
    "im:name": name,
  } = podcast;

  return (
    <PodcastDetailStyled>
      <div className="detail-card">
        <img
          className="detail-card__image"
          src={image[0]?.label || ""}
          alt={name.label}
          width={140}
          height={140}
        />
        <div className="detail-card__credits">
          <span className="detail-card__title">{name.label}</span>
          <span className="detail-card__author">by {artist.label}</span>
        </div>
        <p className="detail-card__description">Description:</p>
        <div className="detail-card__summary">{summary.label}</div>
      </div>
    </PodcastDetailStyled>
  );
};

export default PodcastDetail;
