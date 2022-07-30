import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { useLikes } from "../context/likes-context";
import DisplayVideoCard from "../components/DisplayVideoCard";

const LikedVideos = () => {
  const {
    likesState: { likes },
  } = useLikes();

  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          {likes.length
            ? likes.map((item) => {
                return <DisplayVideoCard video={item} key={item._id} />;
              })
            : "No Liked Videos"}
        </div>
      </div>
    </>
  );
};

export default LikedVideos;
