import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Workouts from "../../data/workouts.json";
import "./Flexibility.scss";

const images = import.meta.glob("../../assets/images/*", { eager: true });

const Flexibility = () => {
  const navigate = useNavigate();
  const flexibilityWorkouts = Workouts.filter(
    (workout) => workout.type === "Flexibility"
  );

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/find-workout")}>
        ← Back to Find a Workout
      </button>
      <div className="workout-grid">
        {flexibilityWorkouts.map((workout) => {
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

export default Flexibility;
