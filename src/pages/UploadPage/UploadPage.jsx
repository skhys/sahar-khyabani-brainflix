import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const [notification, setNotification] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotification("Video uploaded!");
    setSubmitted(true);
  };

  if (submitted) {
    return <Link to="/" />;
  }

  return (
    <div className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <div className="upload-page__thumbnail">
        <label className="upload-page__thumbnail-title">VIDEO THUMBNAIL</label>
        <div className="upload-page__thumbnail-container">
          <img
            className="upload-page__thumbnail-img"
            src={VideoThumbnail}
            alt="video thumbnail"
          />
        </div>
      </div>
      <div className="upload-page__form-container">
        <form onSubmit={handleSubmit}>
          <label className="upload-page__form-subtitle">TITLE YOUR VIDEO</label>
          <div className="upload-page__form-group-items">
            <input
              className="upload-page__form-input"
              type="text"
              placeholder="Add a title to your video"
              required
            />
            <div className="upload-page__form-wrapper">
              <label className="upload-page__form-subtitle">
                ADD A VIDEO DESCRIPTION
              </label>
              <input
                className="upload-page__form-input-description"
                type="text"
                placeholder="Add a description to your video"
                required
              />
            </div>
            <button type="submit" className="upload-page__form-button">
              PUBLISH
            </button>
            <button type="button" className="upload-page__form-button-cancel">
              CANCEL
            </button>
          </div>
        </form>
      </div>
      {notification && (
        <div className="upload-page__page-notification">{notification}</div>
      )}
    </div>
  );
}

export default UploadPage;
