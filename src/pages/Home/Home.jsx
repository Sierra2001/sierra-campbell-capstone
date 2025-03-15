import React from "react";
import fitnessVideo from "../../assets/FitnessVideo.mp4"; // Import the video
import "./Home.scss"; // Import styles

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
      </div>
    </div>
  );
}

export default Home;
