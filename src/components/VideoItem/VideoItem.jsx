import "./VideoItem.scss";
function VideoItem({ id, image, title, channel, onChangeVideo }) {
  return (
    <div
      className="video-item"
      onClick={() => {
        onChangeVideo(id);
      }}
    >
      <img src={image} alt={title} className="video-item__thumbnail" />
      <div className="video-item__wrapper">
        <h2 className="video-item__vidtitle">{title}</h2>
        <p className="video-item__author">{channel}</p>
      </div>
    </div>
  );
}
export default VideoItem;
