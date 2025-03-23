import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Workouts from "../../data/workouts.json";
import "./Cardio.scss";

// Dynamically import all images
const images = import.meta.glob("../../assets/images/*", { eager: true });

const Cardio = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const cardioWorkouts = Workouts.filter(
    (workout) => workout.type === "Cardio"
  );

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/find-workout")}>
        ← Back to Find a Workout
      </button>
      <div className="workout-grid">
        {cardioWorkouts.map((workout) => {
          const imageSrc =
            images[`../../assets/images/${workout.image}`]?.default || "";

          return (
            <Link
              to={`/workout/${workout.id}`}
              key={workout.id}
              className="workout-card"
            >
              <img src={imageSrc} alt={workout.name} />
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cardio;
