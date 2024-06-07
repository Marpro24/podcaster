import styled from "styled-components";

const PodcastDetailStyled = styled.article`
  text-align: center;
  margin-top: 20px;

  .detail-card {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid;
    border-color: #0c0c0c3d;
    box-shadow: #e1d9d9 2px 2px 10px;
    text-align: left;
    width: 200px;
    height: inherit;
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
  }
  .detail-card__title {
    font-size: 0.9rem;
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
  }

  .detail-card__summary {
    font-size: 0.6rem;
    font-style: italic;
    letter-spacing: 1px;
    line-height: 1.4;
    margin: 9px;
    word-break: break-word;
  }
`;

export default PodcastDetailStyled;
