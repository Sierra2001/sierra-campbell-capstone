import React from "react";
import { Link } from "react-router-dom";
import "./Workouts.scss";

function Workouts() {
  const workoutTypes = [
    { name: "Strength", className: "strength", route: "/strength" },
    { name: "Cardio", className: "cardio", route: "/cardio" },
    { name: "Flexibility", className: "flexibility", route: "/flexibility" },
  ];

  return (
    <div className="workouts-container">
      <h1 className="title">Find a Workout</h1>
      <div className="buttons-container">
        {workoutTypes.map((workout, index) => (
          <Link
            key={index}
            to={workout.route}
            className={`button ${workout.className}`}
          >
            {workout.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
