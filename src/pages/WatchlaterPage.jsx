import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { useWatchlater } from "../context/watchlater-context";
import DisplayVideoCard from "../components/DisplayVideoCard";

const PlaylistPage = () => {
  const {
    watchlaterState: { watchlater },
  } = useWatchlater();

  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          {watchlater.length
            ? watchlater.map((item) => {
                return <DisplayVideoCard video={item} key={item._id} />;
              })
            : "No videos to watchlater"}
        </div>
      </div>
    </>
  );
};

export default PlaylistPage;
