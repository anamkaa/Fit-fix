import React, { useState } from "react";
import { DotsThreeVertical } from "phosphor-react";
import Popup from "./Popup";
import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";

const VideoCard = ({
  videos: { _id, title, creator, creatorAvatar, views, imgSrc, dateCreated },
}) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleClickAway = () => {
    setisModalOpen((isModalOpen) => false);
  };

  return (
    <>
      <div className="ff-video-card">
        <Link to={`/videoPage/${_id}`}>
          <div className="ff-video-card-image">
            <img src={imgSrc} alt="card" className="image" />
          </div>
        </Link>

        <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
          <div className="ff-video-card-content flex flex-align-start flex-justify-space-btw">
            <Link to={`/videoPage/${_id}`}>
              <div className="ff-video-card-content-img">
                <img src={creatorAvatar} alt="avatar" class="ff-avatar" />
              </div>
            </Link>

            <Link to={`/videoPage/${_id}`}>
              <div className="ff-video-card-content-text flex flex-col flex-justify-start text-left">
                <div className="ff-video-card-content-header flex flex-align-center flex-justify-start">
                  {title}
                </div>
                <div className="ff-video-card-content-footer flex flex-col flex-align-start flex-justify-center">
                  <div>{creator}</div>
                  <div>
                    {views} views • {dateCreated}
                  </div>
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
