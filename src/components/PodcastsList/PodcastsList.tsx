import PodcastsListStyled from "./PodcastsListstyled";
import usePodcastsApi from "../../hooks/usePodcastsApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";

export const PodcastsList = (): React.ReactElement => {
  const { podcasts, status } = usePodcastsApi();
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (status === "loading") {
    return <div>Loading podcasts...</div>;
  }

  if (status === "failed") {
    return <div>Error: podcasts not found {}</div>;
  }

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast["im:name"].label.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <PodcastsListStyled>
        {filteredPodcasts.map((podcast) => (
          <li className="podcast-item" key={podcast.id.attributes["im:id"]}>
            <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
              <img
                className="podcast-image"
                src={podcast["im:image"][0].label}
                alt={podcast["im:name"].label}
                width={60}
                height={60}
              />
              <div className="podcast-text-container">
                <h2 className="podcast-title">{podcast["im:name"].label}</h2>
                <p className="podcast-author">
                  {" "}
                  Author: {podcast["im:artist"].label}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </PodcastsListStyled>
    </>
  );
};
