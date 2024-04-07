import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const [notification, setNotification] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotification("Video uploaded!");
    setShowForm(false);
    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="upload-page">
        <h1 className="upload-page__title">Upload Video</h1>
        <div className="upload-page__thumbnail-wrapper">
          <label className="upload-page__thumbnail-title">
            VIDEO THUMBNAIL
          </label>
          <div className="upload-page__thumbnail-container">
            <img
              className="upload-page__thumbnail-img"
              src={VideoThumbnail}
              alt="video thumbnail"
            />
          </div>
        </div>
        <div className="upload-page__form-container">
          <div className="upload-page__page-notification">{notification}</div>
          <Navigate to="/" />
        </div>
      </div>
    );
  }

  return (
    <div className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <div className="upload-page__thumbnail-wrapper">
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
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label className="upload-page__form-subtitle">
              TITLE YOUR VIDEO
            </label>
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
        )}
        {notification && (
          <div className="upload-page__page-notification">{notification}</div>
        )}
      </div>
    </div>
  );
}

export default UploadPage;
