import React from "react";
import { Link } from "react-router-dom"; 
import fitnessVideo from "../../assets/FitnessVideo.mp4"; 
import "./Home.scss"; 

function Home() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={fitnessVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="brand-text">
          Wherever you <span className="highlight">go</span>, <br />
          your workout can <span className="highlight">too</span>.
        </h1>

        {/* Buttons */}
        <div className="buttons-container">
          <Link to="/find-gym" className="button">
            Find a Gym
          </Link>
          <Link to="/find-workout" className="button">
            Find a Workout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
