import styled from "styled-components";

const PodcastDetailStyled = styled.article`
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

  .episodes-count {
    font-size: 1rem;
    border: solid #fcfcfc;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-left: 70px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .episodes-count__text {
    position: relative;
    right: 280px;
    font-weight: bold;
  }

  .episodes-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: fit-content;
    width: 700px;
    margin-left: 70px;
    border: solid #fcfcfc;
  }

  .episodes-container__info {
    display: flex;
    gap: 160px;
    margin: 15px;
    font-size: 0.8rem;
    margin-right: 20px;
  }

  .episodes-container__header-title {
    width: 500px;
    text-align: left;
  }
  .episodes-container__header-date {
    width: fit-content;
    position: relative;
    left: 130px;
  }
  .episodes-container__header-duration {
    width: fit-content;
    position: relative;
    left: 15px;
  }

  .episode-list {
    width: 100%;
    list-style-type: none;
    font-size: 0.7rem;
    text-align: left;
  }

  .episode-list:nth-child(even) {
    background-color: #fcfcfc;
  }

  .episode-list-episode {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin-left: 20px;
    border-bottom: 1px solid #ccc;
  }
  .episode-title {
    width: 500px;
    display: inline-block;
    margin-right: 20px;
  }

  .episode-date {
    width: fit-content;
    display: inline-block;
    margin-right: 20px;
  }

  .episode-duration {
    width: fit-content;
    display: inline-block;
    margin-right: 20px;
  }
`;

export default PodcastDetailStyled;
