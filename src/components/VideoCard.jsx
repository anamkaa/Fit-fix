import React, { useState } from "react";
import { DotsThreeVertical } from "phosphor-react";
import Popup from "./Popup";
import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";

const VideoCard = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleClickAway = () => {
    setisModalOpen((isModalOpen) => false);
  };

  return (
    <>
      <div className="ff-video-card">
        <Link to="/videoPage">
          <div className="ff-video-card-image">
            <img
              src="https://i.ytimg.com/vi/mCi3pv5r09s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrt-sqI40gPpgU0lPSyalWRHWVuQ"
              alt="card"
              className="image"
            />
          </div>
        </Link>

        <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
          <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
            <Link to="/videoPage">
              <div className="ff-video-card-content-img">
                <img
                  src="https://yt3.ggpht.com/AukCDcmzFMxdgsXZN3K5ydji7Jd9IW6WZ0R2PrMUN51MZkgPJtcLH2zFCby0KoAUb-j4VdMPI-s=s68-c-k-c0x00ffffff-no-rj"
                  alt="avatar"
                  class="ff-avatar"
                />
              </div>
            </Link>

            <Link to="/videoPage">
              <div className="ff-video-card-content-text flex flex-col flex-justify-start text-left">
                <div className="ff-video-card-content-header flex flex-align-center flex-justify-start">
                  Lorem ipsum dolor sit.
                </div>
                <div className="ff-video-card-content-footer flex flex-col flex-align-start flex-justify-center">
                  <div>Author</div>
                  <div>Views</div>
                </div>
              </div>
            </Link>
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
        {isModalOpen && <Popup />}
      </div>
    </>
  );
};

export default VideoCard;
