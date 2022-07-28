import React, { useState } from "react";
import { ClockAfternoon, Queue, ThumbsUp } from "phosphor-react";
import { useVideos } from "../context/video-context";
import { useAuth } from "../context/auth-context";
import { useLikes } from "../context/likes-context";
import { useWatchlater } from "../context/watchlater-context";
import { useNavigate } from "react-router-dom";
import {
  addToLikeService,
  removeFromLikeService,
} from "../services/like-services";
import {
  addToWatchlaterService,
  removeFromWatchlaterService,
} from "../services/watchlater-services";

const VideoPlayer = ({ video }) => {
  const { videos } = useVideos();
  const {
    user: { isLogged, tokenVal },
  } = useAuth();
  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();
  const {
    watchlaterState: { watchlater },
    watchlaterDispatch,
  } = useWatchlater();

  const navigate = useNavigate();

  const userSelectedVideo = videos.find((item) => item._id === video._id);

  const addToLike = () => {
    if (isLogged) {
      addToLikeService(userSelectedVideo, tokenVal, likesDispatch);
    } else {
      navigate("/login");
    }
    console.log(userSelectedVideo);
  };

  const removeFromLike = () => {
    if (isLogged) {
      removeFromLikeService(video._id, tokenVal, likesDispatch);
    } else {
      navigate("/login");
    }
  };

  const addToWatchlater = () => {
    if (isLogged) {
      addToWatchlaterService(userSelectedVideo, tokenVal, watchlaterDispatch);
    } else {
      navigate("/login");
    }
  };

  const removeFromWatchlater = () => {
    if (isLogged) {
      removeFromWatchlaterService(video._id, tokenVal, watchlaterDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="ff-container-videoplayer">
        <div className="ff-iframe">
          <iframe
            width="560"
            height="315"
            src={video.source}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="ff-videoplayer-text flex flex-col">
          <div className="ff-container-options flex flex-align-center flex-justify-space-btw">
            <div>
              <span className="h6"> {video.views} views </span>|
              <span className="h6"> {video.dateCreated} </span>
            </div>
            <div className="ff-videoplayer-icon-wrap flex flex-align-center flex-justify-end">
              <div
                className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center"
                onClick={() => {
                  likes.some((item) => item._id === video._id)
                    ? removeFromLike()
                    : addToLike();
                }}
              >
                <ThumbsUp
                  size={18}
                  className="ff-videoplayer-icon"
                  weight={
                    likes.some((item) => item._id === video._id)
                      ? "fill"
                      : "regular"
                  }
                />
                <span className="ff-videoplayer-icons-text">Like</span>
              </div>

              <div className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center">
                <Queue size={18} className="ff-videoplayer-icon" />{" "}
                <span className="ff-videoplayer-icons-text">Playlist</span>
              </div>

              <div
                className="ff-videoplayer-icon-chip  btn-warning btn-warning-hover ff-btn-secondary flex flex-align-center"
                onClick={() => {
                  watchlater.some((item) => item._id === video._id)
                    ? removeFromWatchlater()
                    : addToWatchlater();
                }}
              >
                <ClockAfternoon
                  size={18}
                  className="ff-videoplayer-icon"
                  weight={
                    watchlater.some((item) => item._id === video._id)
                      ? "fill"
                      : "regular"
                  }
                />
                <span className="ff-videoplayer-icons-text">Watchlater</span>
              </div>
            </div>
          </div>

          <div className="ff-videoplayer-heading">{video.title}</div>
          <div className="ff-videoplayer-desc">
            <div className="ff-videoplayer-author-wrap flex flex-align-center flex-justify-start">
              <img
                src={video.creatorAvatar}
                alt={video.creator}
                class="ff-avatar"
              />{" "}
              {video.creator}
            </div>
            {video.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
