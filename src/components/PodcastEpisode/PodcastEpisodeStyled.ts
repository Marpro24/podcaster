import styled from "styled-components";

const PodcastEpisodeStyled = styled.article`
  text-align: center;
  margin-top: 20px;
  display: flex;

  .detail-card {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid;
    border-color: #fcfcfc;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 200px;
    height: fit-content;
  }

  .detail-card__image {
    align-self: center;
    margin: 10px;
  }
  .detail-card__credits {
    display: flex;
    flex-direction: column;
    border-bottom: 0.1rem solid #c7c8c9;
    border-top: 0.1rem solid #c7c8c9;
    margin: 10px;
    line-height: 1.5;
    text-align: left;
  }
  .detail-card__title {
    font-size: 0.7rem;
    font-weight: bolder;
    margin-top: 10px;
  }

  .detail-card__author {
    font-size: 0.7rem;
    font-style: italic;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .detail-card__description {
    font-size: 0.7rem;
    font-weight: bold;
    margin: 5px;
    text-align: left;
  }

  .detail-card__summary {
    font-size: 0.7rem;
    font-style: italic;
    letter-spacing: 1px;
    line-height: 1.4;
    margin: 9px;
    word-break: break-word;
    text-align: left;
  }

  .episode-container {
    border: 0.1rem solid;
    border-color: #fcfcfc;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: fit-content;
    width: 500px;
    line-height: 1.5;
    text-align: left;
    margin-left: 50px;
  }

  .episode-title {
    font-size: 0.8rem;
    font-weight: bold;

    margin: 10px;
  }

  .episode-description {
    font-size: 0.6rem;
    border-bottom: 0.1rem solid #c7c8c9;
    margin: 15px;
    word-wrap: break-word;
  }

  .episode-audio {
    width: 490px;
    margin: 5px;
  }
`;

export default PodcastEpisodeStyled;
