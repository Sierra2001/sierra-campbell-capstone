import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Workouts from "../../data/workouts.json";
import "./WorkoutDetails.scss";

const images = import.meta.glob("../../assets/images/*", { eager: true });

const WorkoutDetails = () => {
  const { id } = useParams();
  const workout = Workouts.find((w) => w.id.toString() === id);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);

  if (!workout) {
    return <h2>Workout not found!</h2>;
  }

  const imageSrc =
    images[`../../assets/images/${workout.image}`]?.default || "";

  const workoutTypeLink = `/${workout.type.toLowerCase()}`;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    const newComment = {
      id: comments.length + 1,
      name: name,
      timestamp: timestamp,
      comment: comment,
    };
    setComments([...comments, newComment]);
    setComment("");
    setName("");
  };

  return (
    <div className="workout-details">
      <div className="workout-details__header">
        <h1 className="workout-details__title">{workout.name}</h1>
        <Link to={workoutTypeLink} className="button">
          Back to {workout.type} Workouts
        </Link>
      </div>
      <img
        className="workout-details__image"
        src={imageSrc}
        alt={workout.name}
      />
      <p className="workout-details__description">{workout.description}</p>
      <h3 className="workout-details__instructions-title">How to do it:</h3>
      <p className="workout-details__instructions">{workout.instructions}</p>
      {/* Comment Form */}
      <div className="comment-form">
        <h3>Post a Comment</h3>
        <form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Your Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment"
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            Post Comment
          </button>
        </form>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {comments.length > 0 ? (
          comments.map((commentData) => (
            <div key={commentData.id} className="comment">
              <p className="comment__header">
                <strong>{commentData.name}</strong>{" "}
                <span className="timestamp">{commentData.timestamp}</span>
              </p>
              <p>{commentData.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutDetails;
