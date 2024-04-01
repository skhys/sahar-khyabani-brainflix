import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./data/video-details.json";
import MainComment from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(VideoDetails[0]);

  const onChangeVideo = (videoId) => {
    const foundVideo = VideoDetails.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(foundVideo);
  };

  return (
    <>
      <Header />
      <MainVideo selectedVideo={selectedVideo} />
      <MainComment selectedComment={selectedVideo} />
      <VideoList
        videosData={VideoDetails}
        selectedVideo={selectedVideo}
        onChangeVideo={onChangeVideo}
      />
    </>
  );
}

export default App;
