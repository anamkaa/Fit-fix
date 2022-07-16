import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const PlaylistPage = () => {
  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">playlist will Come here.</div>
      </div>
    </>
  );
};

export default PlaylistPage;
