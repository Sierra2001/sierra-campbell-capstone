import React from "react";
import { Link } from "react-router-dom";
import Workouts from "../../data/workouts.json";
import "./Strength.scss";

// Dynamically import all images
const images = import.meta.glob("../../assets/images/*", { eager: true });

const Strength = () => {
  const strengthWorkouts = Workouts.filter(
    (workout) => workout.type === "Strength"
  );

  return (
    <div>
      <div className="workout-grid">
        {strengthWorkouts.map((workout) => {
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

export default Strength;
