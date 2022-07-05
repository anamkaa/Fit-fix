import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import VideoCard from "../components/VideoCard";
import CategoryBar from "../components/CategoryBar";
import { ArrowCircleUp } from "phosphor-react";
import { videos } from "../backend/db/videos";

const VideoListingPage = () => {
  return (
    <>
      <Navbar />
      <ArrowCircleUp
        size={36}
        weight="fill"
        className="ff-arrowup"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          <CategoryBar />

          <div className="ff-container-video-card">
            {videos.map((item) => {
              return <VideoCard videos={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListingPage;
