import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./data/video-details.json";
import MainComment from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [selectedVid, setSelectedVid] = useState(VideoDetails[0]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log(VideoDetails[0]);
  return (
    <>
      <Header />
      <MainVideo selectedVid={selectedVid} />
      <MainComment selectedComment={selectedVid} />
      <VideoList selectedVideo={selectedVid} />
    </>
  );
}

export default App;
