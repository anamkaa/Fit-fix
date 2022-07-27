import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { useAuth } from "../context/auth-context";
import { useLikes } from "../context/likes-context";
import VideoCard from "../components/VideoCard";

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
                return <VideoCard video={item} key={item._id} />;
              })
            : "No Liked Videos"}
        </div>
      </div>
    </>
  );
};

export default LikedVideos;
