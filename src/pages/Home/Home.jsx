import React from "react";
import fitnessVideo from "../../assets/FitnessVideo.mp4"; // Import the video
import "./Home.scss"; // Import styles

function Home() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={fitnessVideo} type="video/mp4" />
      </video>
      <div className="content"></div>
    </div>
  );
}

export default Home;
