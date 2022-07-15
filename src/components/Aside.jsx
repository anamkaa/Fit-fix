import React from "react";
import {
  ThumbsUp,
  ClockAfternoon,
  Queue,
  ClockCounterClockwise,
  Compass
} from "phosphor-react";
import {Link} from "react-router-dom";

const Aside = () => {
  return (
    <>
      <div className="ff-container-aside-wrap">
        <div className="ff-container-aside">

          <Link to="/videoListingPage/all">
          <div className="ff-container-aside-chip flex flex-align-center flex-justify-start">
            <Compass size={34} className="ff-aside-chip-icon" weight="bold" />

            <div className="ff-aside-chip-text">Explore</div>
          </div>
          </Link>

          <Link to="/likedVideos">
          <div className="ff-container-aside-chip flex flex-align-center flex-justify-start">
            <ThumbsUp size={34} className="ff-aside-chip-icon" weight="bold" />

            <div className="ff-aside-chip-text">Liked Videos</div>
          </div>
          </Link>
          

          <Link to="/playlist">
          <div className="ff-container-aside-chip flex flex-align-center flex-justify-start">
            <Queue size={34} className="ff-aside-chip-icon" weight="bold" />
            <div className="ff-aside-chip-text">Playlists</div>
          </div>
          </Link>
         

          <Link to="/watchlater">
          <div className="ff-container-aside-chip flex flex-align-center flex-justify-start">
            <ClockAfternoon
              size={34}
              className="ff-aside-chip-icon"
              weight="bold"
            />
            <div className="ff-aside-chip-text">Watch later</div>
          </div>
          </Link>
          

          <Link to="/history">
          <div className="ff-container-aside-chip flex flex-align-center flex-justify-start">
            <ClockCounterClockwise
              size={34}
              className="ff-aside-chip-icon"
              weight="bold"
            />
            <div className="ff-aside-chip-text">History</div>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Aside;
