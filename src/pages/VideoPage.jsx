import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import VideoPlayer from "../components/VideoPlayer";
import { videos } from "../backend/db/videos";
import { useParams } from "react-router-dom";
// import axios from "axios";

const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-videopage">
          <VideoPlayer videos={videos.find((video) => video._id === videoId)} />

          <div className="ff-container-videonote">
            <div className="ff-videonote-wrap">
              <div className="ff-videonote-heading ff-videoplayer-heading">
                Note
              </div>
              <input
                type="text"
                className="ff-videonote-input"
                placeholder="Title"
              />
              <textarea
                className="ff-videonote-input"
                cols="30"
                rows="5"
                placeholder="Description"
              />
              <div className="ff-videonote-btn btn btn-warning btn-warning-hover ff-btn-secondary">
                Add Note
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
