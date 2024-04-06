import React, { useState } from "react";
import "./UploadPage.scss";
import VideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadPage() {
  const [notification, setNotification] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotification("Video uploaded!");
    setSubmitted(true);
  };

  if (submitted) {
    return <Redirect to="/" />;
  }

  return (
    <div className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <div className="upload-page__thumbnail">
        <h3 className="upload-page__thumbnail-title">VIDEO THUMBNAIL</h3>
        <img
          className="upload-page__thumbnail-img"
          src={VideoThumbnail}
          alt="video thumbnail"
        />
      </div>
      <div className="upload-page__form-container">
        <form onSubmit={handleSubmit}>
          <label className="upload-page__form-subtitle">TITLE YOUR VIDEO</label>
          <input
            className="upload-page__form-input"
            type="text"
            placeholder="Add a title to your video"
            required
          />
          <label className="upload-page__form-subtitle">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="upload-page__form-input-description"
            type="text"
            placeholder="Add a description to your video"
            required
          />
          <button type="submit" className="upload-page__form-button">
            PUBLISH
          </button>
          <button type="button" className="upload-page__form-button-cancel">
            CANCEL
          </button>
        </form>
      </div>
      {notification && (
        <div className="upload-page__page-notification">{notification}</div>
      )}
    </div>
  );
}

export default UploadPage;
