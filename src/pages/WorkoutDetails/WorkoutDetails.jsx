import React from "react";
import { useParams, Link } from "react-router-dom";
import Workouts from "../../data/workouts.json";
import "./WorkoutDetails.scss";

const images = import.meta.glob("../../assets/images/*", { eager: true });

const WorkoutDetails = () => {
  const { id } = useParams();
  const workout = Workouts.find((w) => w.id.toString() === id);

  if (!workout) {
    return <h2>Workout not found!</h2>;
  }

  const imageSrc =
    images[`../../assets/images/${workout.image}`]?.default || "";

  // Dynamically set the link based on workout type
  const workoutTypeLink = `/${workout.type.toLowerCase()}`;

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
    </div>
  );
};

export default WorkoutDetails;
