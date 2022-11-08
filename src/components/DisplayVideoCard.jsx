import React from "react";
import { ClockAfternoon, ThumbsUp, Queue, TrashSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useLikes } from "../context/likes-context";
import { useNavigate } from "react-router-dom";
import {
  addToLikeService,
  removeFromLikeService,
} from "../services/like-services";
import { useVideos } from "../context/video-context";
import {
  addToWatchlaterService,
  removeFromWatchlaterService,
} from "../services/watchlater-services";
import { useWatchlater } from "../context/watchlater-context";
import { useHistory } from "../context/history-context";
import { deleteFromHistoryService } from "../services/history-services";

const DisplayVideoCard = ({ video }) => {
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

  const { historyDispatch } = useHistory();

  const navigate = useNavigate();

  const { videos } = useVideos();

  const userSelectedVideo = videos.find((item) => item._id === video._id);

  const addToLike = () => {
    if (isLogged) {
      addToLikeService(userSelectedVideo, tokenVal, likesDispatch);
    } else {
      navigate("/login");
    }
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

  const deleteFromHistory = () => {
    if (isLogged) {
      deleteFromHistoryService(video._id, tokenVal, historyDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="ff-video-card" style={{ width: "500px" }}>
        <Link to={`/videoPage/${video?._id}`}>
          <div className="ff-video-card-image">
            <img src={video.imgSrc} alt="card" className="image" />
          </div>
        </Link>

        <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
          <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
            <Link to={`/videoPage/${video?._id}`}>
              <div className="ff-video-card-content-img">
                <img
                  src={video.creatorAvatar}
                  alt="avatar"
                  className="ff-avatar"
                />
              </div>
            </Link>

            <div className="ff-video-card-content-text flex flex-col flex-justify-start text-left">
              <div className="ff-video-card-content-header flex flex-align-center flex-justify-start">
                {video.title}
              </div>
              <div className="ff-video-card-content-footer flex flex-col flex-align-start flex-justify-center">
                <div>{video.creator}</div>
                <div>
                  {video.views} views • {video.dateCreated}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ThumbsUp
              size={26}
              className="ff-popup-icon"
              onClick={() => {
                likes.some((item) => item._id === video._id)
                  ? removeFromLike()
                  : addToLike();
              }}
              weight={
                likes.some((item) => item._id === video._id)
                  ? "fill"
                  : "regular"
              }
            />
            <ClockAfternoon
              size={26}
              className="ff-popup-icon"
              onClick={() => {
                watchlater.some((item) => item._id === video._id)
                  ? removeFromWatchlater()
                  : addToWatchlater();
              }}
              weight={
                watchlater.some((item) => item._id === video._id)
                  ? "fill"
                  : "regular"
              }
            />
            <Queue size={26} className="ff-popup-icon" />
            <TrashSimple
              size={26}
              className="ff-popup-icon"
              onClick={() => {
                deleteFromHistory();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayVideoCard;
