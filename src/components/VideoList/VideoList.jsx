import "./VideoList.scss";
import videosData from "../../data/videos.json";
import VideoItem from "../VideoItem/VideoItem";
function VideoList(props) {
  const { videosData, selectedVideo, onChangeVideo } = props;
  const filteredVideos = videosData.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="video-list__container">
      <h1 className="video-list__headertitle">NEXT VIDEOS</h1>
      <div className="video-list__details">
        {filteredVideos.map((video) => (
          <VideoItem
            key={video.id}
            id={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
            onChangeVideo={onChangeVideo}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
