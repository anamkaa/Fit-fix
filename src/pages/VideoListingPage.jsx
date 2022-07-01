import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import VideoCard from "../components/VideoCard";
import CategoryBar from "../components/CategoryBar";
import { ArrowCircleUp } from "phosphor-react";

const VideoListingPage = () => {
  return (
    <>
      <Navbar />
      <a href="#category"></a>
      <ArrowCircleUp size={36} weight="fill" className="ff-arrowup" />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          <CategoryBar />

          <div className="ff-container-video-card">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListingPage;
