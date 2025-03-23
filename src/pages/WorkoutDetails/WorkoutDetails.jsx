import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./WorkoutDetails.scss";

// Dynamically import images
const images = import.meta.glob("../../assets/images/*", { eager: true });

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Fetch workout details and comments
  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`http://localhost:8080/workouts/${id}`);
        const data = await response.json();
        setWorkout(data);
        setComments(data.comments || []);
      } catch (error) {
        console.error("Error fetching workout:", error);
      }
    };
    fetchWorkout();
  }, [id]);

  // Submit a new comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    try {
      const response = await fetch(
        `http://localhost:8080/workouts/${id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, comment }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const updatedWorkout = await response.json();
      setComments(updatedWorkout.comments); // Update comments list
      setName("");
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (!workout) {
    return <h2>Loading...</h2>;
  }

  // Dynamically load the image based on the workout image name
  const imageSrc =
    images[`../../assets/images/${workout.image}`]?.default ||
    "/assets/images/default.jpg"; // Fallback image

  return (
    <div className="workout-details">
      <div className="workout-details__header">
        <h1 className="workout-details__title">{workout.name}</h1>
        <Link to={`/${workout.type.toLowerCase()}`} className="button">
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

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.length > 0 ? (
          comments.map((commentData) => (
            <div key={commentData.id} className="comment">
              <p className="comment__header">
                <strong>{commentData.name}</strong>{" "}
                <span className="timestamp">
                  {new Date(commentData.timestamp).toLocaleString()}
                </span>
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
