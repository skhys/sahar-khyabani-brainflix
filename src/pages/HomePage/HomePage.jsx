import React, { useState, useEffect } from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainComment from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const API_URL = "http://localhost:8080/";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoDetail, setSelectedVideoDetail] = useState({
    title: "loading...",
  });
  const [allVideos, setAllVideos] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API_URL}videos/`);
        const videos = response.data;
        const selectedVideoId = params.videoId ? params.videoId : videos[0].id;
        setAllVideos(videos);
        setSelectedVideo(videos.find((video) => video.id === selectedVideoId));
        const response2 = await axios.get(
          `${API_URL}videos/${selectedVideoId}`
        );
        setSelectedVideoDetail(response2.data);
      } catch (err) {}
    };
    fetchVideos();
  }, [params.videoId]);

  const onChangeVideo = (videoId) => {
    const foundVideo = allVideos.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(foundVideo);
  };
  return (
    <>
      <MainVideo selectedVideo={selectedVideoDetail} />
      <div className="main-wrapper">
        <div className="main-wrapper__info">
          <VideoInfo selectedVideo={selectedVideoDetail} />
          <MainComment selectedComment={selectedVideoDetail} />
        </div>
        <div className="main-wrapper-side">
          <VideoList
            onChangeVideo={onChangeVideo}
            filteredVideos={allVideos.filter(
              (video) => video.id !== selectedVideo.id
            )}
          />
        </div>
      </div>
    </>
  );
}
