import React from "react";
import "./MainVideo.scss";
import ViewsImg from "../../assets/Images/Icons/views.svg";
import LikesImg from "../../assets/Images/Icons/likes.svg";

function MainVideo({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp);
  const formattedDate = `${date.toLocaleDateString()}`;

  return (
    <>
      <div className="main-video">
        <div className="main-video__poster">
          <video
            className="main-video__thumbnail"
            controls
            poster={selectedVideo.image}
          >
            <source src={selectedVideo.video} />
          </video>
        </div>
        <h2 className="main-video__title">{selectedVideo.title}</h2>
        <div className="main-video__wrapper">
          <div className="main-video__detail">
            <p className="main-video__author">By {selectedVideo.channel}</p>
            <p className="main-video__date">{formattedDate}</p>
          </div>
          <div className="main-video__item">
            <div className="main-video__views">
              <img
                className="main-video__viewsicon"
                src={ViewsImg}
                alt="Views Icon"
              />
              <p className="main-video__date">{selectedVideo.views}</p>
            </div>
            <div className="main-video__likes">
              <img
                className="main-video__likesicon"
                src={LikesImg}
                alt="Likes Icon"
              />
              <p className="main-video__likestext">{selectedVideo.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="main-video__description">{selectedVideo.description}</p>
    </>
  );
}

export default MainVideo;
