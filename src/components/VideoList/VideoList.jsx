import "./VideoList.scss";
import videosData from "../../data/videos.json";

function VideoList(props) {
  const { videosData, selectedVideo, onChangeVideo } = props;
  const filteredVideos = videosData.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="video-list-container">
      <h1 className="video-list__headertitle">NEXT VIDEOS</h1>
      <div className="video-list__details">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="video-list__item"
            onClick={() => {
              onChangeVideo(video.id);
            }}
          >
            <img
              src={video.image}
              alt={video.title}
              className="video-list__thumbnail"
            />
            <div className="video-list__wrapper">
              <h2 className="video-list__vidtitle">{video.title}</h2>
              <p className="video-list__author">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
