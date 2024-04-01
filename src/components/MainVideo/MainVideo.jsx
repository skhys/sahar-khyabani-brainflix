import React from "react";
import "./MainVideo.scss";
import ViewsImg from "../../assets/Images/Icons/views.svg";
import LikesImg from "../../assets/Images/Icons/likes.svg";

function MainVideo({ selectedVid }) {
  const date = new Date(selectedVid.timestamp);
  const formattedDate = `${date.toLocaleDateString()}`;

  return (
    <>
      <div className="main-video">
        <div className="main-video__poster">
          <video
            className="main-video__thumbnail"
            controls
            poster={selectedVid.image}
          >
            <source src={selectedVid.video} />
          </video>
        </div>
        <h2 className="main-video__title">{selectedVid.title}</h2>
        <div className="main-video__wrapper">
          <div className="main-video__detail">
            <p className="main-video__author">By {selectedVid.channel}</p>
            <p className="main-video__date">{formattedDate}</p>
          </div>
          <div className="main-video__item">
            <div className="main-video__views">
              <img className="main-video__viewsicon" src={ViewsImg}></img>
              <p className="main-video__date">{selectedVid.views}</p>
            </div>
            <div className="main-video__likes">
              <img className="main-video__likesicon" src={LikesImg}></img>
              <p className="main-video__likestext">{selectedVid.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="main-video__description">{selectedVid.description}</p>
    </>
  );
}

export default MainVideo;
