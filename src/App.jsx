import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./data/video-details.json";
import MainComment from "./components/Comments/Comments";

function App() {
  const [selectedVid, setSelectedVid] = useState(VideoDetails[0]);
  console.log(VideoDetails[0]);
  return (
    <>
      <Header />
      <MainVideo selectedVid={selectedVid} />
      <MainComment selectedComment={selectedVid} />
    </>
  );
}

export default App;
