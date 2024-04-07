import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";
function VideoList(props) {
  const { onChangeVideo, filteredVideos } = props;

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
