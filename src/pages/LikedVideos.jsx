import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const LikedVideos = () => {
  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">Liked Videos Come here.</div>
      </div>
    </>
  );
};

export default LikedVideos;
