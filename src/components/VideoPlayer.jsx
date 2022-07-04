import React from "react";
import { ClockAfternoon, Queue, ThumbsUp } from "phosphor-react";

const VideoPlayer = ({ videos }) => {
  return (
    <>
      <div className="ff-container-videoplayer">
        <div className="ff-iframe">
          <iframe
            width="560"
            height="315"
            src={videos.source}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="ff-videoplayer-text flex flex-col">
          <div className="ff-container-options flex flex-align-center flex-justify-space-btw">
            <div>
              <span className="h6"> {videos.views} views </span>|
              <span className="h6"> {videos.dateCreated} </span>
            </div>
            <div className="ff-videoplayer-icon-wrap flex flex-align-center flex-justify-end">
              <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                <ThumbsUp size={18} className="ff-videoplayer-icon" />{" "}
                <span className="ff-videoplayer-icons-text">Like</span>
              </div>

              <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                <Queue size={18} className="ff-videoplayer-icon" />{" "}
                <span className="ff-videoplayer-icons-text">Playlist</span>
              </div>

              <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                <ClockAfternoon size={18} className="ff-videoplayer-icon" />{" "}
                <span className="ff-videoplayer-icons-text">Watchlater</span>
              </div>
            </div>
          </div>

          <div className="ff-videoplayer-heading">{videos.title}</div>
          <div className="ff-videoplayer-desc">
            <div className="ff-videoplayer-author-wrap flex flex-align-center flex-justify-start">
              <img
                src={videos.creatorAvatar}
                alt={videos.creator}
                class="ff-avatar"
              />{" "}
              {videos.creator}
            </div>
            {videos.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
