import React from "react";
import "./Comments.scss";
import circleImg from "../../assets/Images/Mohan-muruge.jpg";
import defaultAvatar from "../../assets/Images/defaultAvatar.png";

function MainComment({ selectedComment }) {
  if (
    !selectedComment ||
    !selectedComment.comments ||
    selectedComment.comments.length === 0
  ) {
    return (
      <div className="comment-section">
        <p className="comment-section__count">No comments available</p>
      </div>
    );
  }

  const organizeComments = selectedComment.comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US");
  };

  return (
    <div className="comment-section">
      <p className="comment-section__count">
        {selectedComment.comments.length} Comments
      </p>
      <div className="comment-section__wrapper">
        <img
          className="comment-section__image"
          src={circleImg}
          alt="Mohan Muruge"
        />
        <div className="comment-section__form">
          <p className="comment-section__title">JOIN THE CONVERSATION</p>
          <div className="comment-section__container">
            <input
              className="comment-section__commentform"
              type="textarea"
              placeholder="Add a new comment"
            />
            <div className="comment-section__btnwrapper">
              <button className="comment-section__btn">COMMENT</button>
            </div>
          </div>
        </div>
      </div>

      <div className="comment-section__commentlist">
        {organizeComments.map((comment) => (
          <div key={comment.id} className="comment-section__selectedcomments">
            {comment.image ? (
              <img
                className="comment-section__userpic"
                src={comment.image}
                alt="user image"
              />
            ) : (
              <div className="comment-section__placeholder">
                <img
                  className="comment-section__avatar"
                  src={defaultAvatar}
                  alt="default avatar"
                />
              </div>
            )}
            <div className="comment-section__commentinfo">
              <div className="comment-section__headerinfo">
                <span className="comment-section__username">
                  {comment.name}
                </span>
                <span className="comment-section__date">
                  {formattedDate(comment.timestamp)}
                </span>
              </div>
              <p className="comment-section__text">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComment;
