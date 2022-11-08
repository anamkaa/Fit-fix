import React, { useState } from "react";
import { DotsThreeVertical } from "phosphor-react";
import { ClockAfternoon, ThumbsUp, Queue, Plus, X } from "phosphor-react";
import ClickAwayListener from "react-click-away-listener";
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
import { usePlaylists } from "../context/playlists-context";
import {
  addVideoToPlaylistService,
  createPlaylistServices,
} from "../services/playlists-services";
import { usePlaylistModal } from "../context/playlistModal-context";

const VideoCard = ({ video }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleClickAway = () => {
    setisModalOpen((isModalOpen) => false);
  };

  const [isPlaylistModalOpen, setisPlaylistModalOpen] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ title: "" });

  const {
    playlistsState: { playlists },
    playlistsDispatch,
  } = usePlaylists();

  const { isCreatePlaylistModalOpen, setisCreatePlaylistModalOpen } =
    usePlaylistModal();

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

  const { videos } = useVideos();

  const playlistnameHandler = (e) => {
    setNewPlaylist({ ...newPlaylist, title: e.target.value });
  };

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

  const createPlaylist = () => {
    if (isLogged) {
      createPlaylistServices(newPlaylist, tokenVal, playlistsDispatch);
    } else {
      navigate("/login");
    }
    setNewPlaylist({ ...newPlaylist, title: "" });
  };

  const addVideoToPlaylist = (playlistId) => {
    addVideoToPlaylistService(playlistId, video, tokenVal, playlistsDispatch);
  };

  return (
    <>
      <div className="ff-video-card" style={{ maxWidth: "300px" }}>
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
          <ClickAwayListener onClickAway={handleClickAway}>
            <div
              className="ff-video-card-content-icon"
              onClick={() =>
                setisModalOpen((isModalOpen) => (!isModalOpen ? true : false))
              }
            >
              <DotsThreeVertical size={24} weight="bold" />
            </div>
          </ClickAwayListener>
        </div>
        {
          isModalOpen && (
            // changing

            <div className="ff-popup">
              <div
                className="ff-popup-chip  flex flex-align-center flex-justify-start text-left"
                onClick={() => {
                  likes.some((item) => item._id === video._id)
                    ? removeFromLike()
                    : addToLike();
                }}
              >
                <ThumbsUp size={18} className="ff-popup-icon" />
                <div className="ff-popup-text">
                  {likes.some((item) => item._id === video._id)
                    ? "Remove from Like"
                    : "Add to Like"}
                </div>
              </div>

              <div
                className="ff-popup-chip flex flex-align-center flex-justify-start text-left"
                onClick={() => {
                  watchlater.some((item) => item._id === video._id)
                    ? removeFromWatchlater()
                    : addToWatchlater();
                }}
              >
                <ClockAfternoon size={18} className="ff-popup-icon" />
                <div className="ff-popup-text">
                  {watchlater.some((item) => item._id === video._id)
                    ? "Remove from watchlater"
                    : "Add to watchlater"}
                </div>
              </div>

              <div
                className="ff-popup-chip  flex flex-align-center flex-justify-start text-left"
                onClick={() => {
                  if (isLogged) {
                    setisPlaylistModalOpen(true);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                <Queue size={18} className="ff-popup-icon" />
                <div className="ff-popup-text">Save to playlist</div>
              </div>
            </div>
          )

          //  changing
        }

        {isPlaylistModalOpen && (
          <div className="ff-popup">
            <div className="ff-popup-chip  flex flex-align-center flex-justify-space-btw text-left">
              <div className="ff-popup-text h6 text-bold">Save to ...</div>
              <X
                size={16}
                weight="bold"
                onClick={() => {
                  setisPlaylistModalOpen(false);
                }}
              />
            </div>

            {playlists.map((item) => {
              return (
                <div
                  key={item._id}
                  className="ff-popup-chip flex flex-align-center flex-justify-start text-left"
                >
                  <label htmlFor="playlist" className="ff-popup-text">
                    <input
                      type="checkbox"
                      name=""
                      id="playlist"
                      onChange={() => {
                        addVideoToPlaylist(item._id);
                      }}
                    />{" "}
                    {item.title}
                  </label>
                </div>
              );
            })}

            <div
              className="ff-popup-chip  flex flex-align-center flex-justify-start text-left"
              onClick={() => {
                setisCreatePlaylistModalOpen(true);
              }}
            >
              <Plus size={14} className="ff-popup-icon" weight="bold" />
              <div className="ff-popup-text">Create new playlist</div>
            </div>

            {isCreatePlaylistModalOpen && (
              <div className="ff-popup-chip  flex flex-align-center flex-justify-space-btw text-left">
                <input
                  type="text"
                  placeholder="Enter playlist name"
                  className="ff-popup-text"
                  value={newPlaylist.title}
                  onChange={playlistnameHandler}
                  required
                />

                <button
                  className="btn-sm btn btn-warning-ghost"
                  style={{ margin: "0" }}
                  onClick={() => {
                    createPlaylist();
                    setisCreatePlaylistModalOpen(false);
                  }}
                >
                  Create
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default VideoCard;
