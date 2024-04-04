import React from "react";
import "./VideoInfo.scss";
import ViewsImg from "../../assets/images/icons/views.svg";
import LikesImg from "../../assets/images/icons/likes.svg";

function VideoInfo({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp);
  const formattedDate = `${date.toLocaleDateString()}`;

  return (
    <>
      <h2 className="video-info__title">{selectedVideo.title}</h2>
      <div className="video-info__wrapper">
        <div className="video-info__detail">
          <p className="video-info__author">By {selectedVideo.channel}</p>
          <p className="video-info__date">{formattedDate}</p>
        </div>
        <div className="video-info__item">
          <div className="video-info__views">
            <img
              className="video-info__viewsicon"
              src={ViewsImg}
              alt="Views Icon"
            />
            <p className="video-info__date">{selectedVideo.views}</p>
          </div>
          <div className="video-info__likes">
            <img
              className="video-info__likesicon"
              src={LikesImg}
              alt="Likes Icon"
            />
            <p className="video-info__likestext">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-info__description">{selectedVideo.description}</p>
    </>
  );
}
export default VideoInfo;
