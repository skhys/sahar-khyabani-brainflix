import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./data/video-details.json";
import MainComment from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import VideoInfo from "./components/VideoInfo/VideoInfo";

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
      <div className="main-wrapper">
        <div className="main-wrapper__info">
          <VideoInfo selectedVideo={selectedVideo} />
          <MainComment selectedComment={selectedVideo} />
        </div>
        <div className="main-wrapper-side">
          <VideoList
            videosData={VideoDetails}
            selectedVideo={selectedVideo}
            onChangeVideo={onChangeVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
