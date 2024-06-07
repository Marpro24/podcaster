import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import { PodcastsList } from "../PodcastsList/PodcastsList";
import PodcastDetail from "../PodcastDetail/PodcastDetail";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PodcastsList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
