import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import "./UploadPage.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const imageUrl = "http://localhost:8080/images/image0.jpg";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    channel: "Andrew Carolan",
    image: imageUrl,
    views: "604,865",
    likes: "57,809",
    timestamp: 1692854262000,
    comments: [
      {
        id: "10000",
        name: "Josy Li",
        comment:
          "I feel like I've traveled to the ends of the Earth from the comfort of my home. Thank you for sharing these captivating stories!",
        likes: 8,
        timestamp: 1678083462000,
      },
      {
        id: "100",
        name: "Steven Faliszewski",
        comment:
          "While I appreciate the perspective, I would have loved more details on the discoveries made during these explorations. Perhaps a follow-up video could provide a more comprehensive view.",
        likes: 6,
        timestamp: 1677997062000,
      },
      {
        id: "1000",
        name: "Jayme Liao",
        comment:
          "Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!",
        likes: 5,
        timestamp: 1691558262000,
      },
    ],
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
          <Link to="/">
            <button type="button" className="upload-page__form-button-cancel">
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
