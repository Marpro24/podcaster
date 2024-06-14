import styled from "styled-components";

const PodcastsListStyled = styled.ul`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(25, auto);
  row-gap: 85px;
  column-gap: 20px;
  justify-content: space-evenly;
  align-content: space-evenly;

  .podcast-item {
    border: 0.1rem solid;
    border-color: #0c0c0c3d;
    box-shadow: #e1d9d9 2px 2px 10px;
    text-align: center;
    width: 120px;
  }

  .podcast-image {
    border-radius: 50%;
    position: relative;
    left: 0%;
    top: -28%;
  }

  .podcast-title {
    font-size: 0.7rem;
    position: relative;
    bottom: 23px;
  }

  .podcast-author {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.mainLight};
    position: relative;
    bottom: 19px;
  }

  .podcast-text-container {
  }
`;

export default PodcastsListStyled;
