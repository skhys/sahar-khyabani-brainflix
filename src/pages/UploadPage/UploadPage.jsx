import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const imageUrl = "http://localhost:8080/images/image0.jpg";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    channel: "Best TA Ever",
    image: imageUrl,
    views: "604,865",
    likes: "57,809",
    timestamp: 1692854262000,
    comments: [""],
  });
  const [notification, setNotification] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/videos",
        formData
      );
      setNotification("Video uploaded!");
      setTimeout(() => {
        setSubmitted(true);
      }, 2000);
    } catch (error) {
      console.error("Error uploading video:", error);
      setNotification("Error uploading video. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="upload-page">
        <h1 className="upload-page__title">Upload Video</h1>
        <div className="upload-page__thumbnail">
          <label className="upload-page__thumbnail-title">
            VIDEO THUMBNAIL
          </label>
          <div className="upload-page__thumbnail-container">
            <img
              className="upload-page__thumbnail-img"
              src={imageUrl}
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
      <form onSubmit={handleSubmit}>
        <div className="upload-page__desktop-wrapper">
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
            <label className="upload-page__form-subtitle">
              TITLE YOUR VIDEO
            </label>
            <div className="upload-page__form-group-items">
              <input
                className="upload-page__form-input"
                type="text"
                placeholder="Add a title to your video"
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
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
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {notification && (
                  <div className="upload-page__page-notification">
                    {notification}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="upload-page__form-btn-wrapper">
          <button type="submit" className="upload-page__form-button">
            PUBLISH
          </button>
          <button type="button" className="upload-page__form-button-cancel">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
