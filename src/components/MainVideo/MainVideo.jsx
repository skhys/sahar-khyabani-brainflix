import React from "react";
import "./MainVideo.scss";

function MainVideo({ selectedVideo }) {
  return (
    <>
      <div className="main-video">
        <div className="main-video__container">
          <video
            className="main-video__thumbnail"
            controls
            poster={selectedVideo.image}
          >
            <source src={selectedVideo.video} />
          </video>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
