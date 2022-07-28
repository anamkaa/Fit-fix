import { ClockAfternoon, ThumbsUp, Queue } from "phosphor-react";
import React from "react";

const Popup = () => {
  return (
    <>
      <div className="ff-popup">
        <div className="ff-popup-chip  flex flex-align-center flex-justify-start text-left">
          <ThumbsUp size={18} className="ff-popup-icon" />
          <div className="ff-popup-text">Like video</div>
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <ClockAfternoon size={18} className="ff-popup-icon" />
          <div className="ff-popup-text">Save to watchlater</div>
        </div>

        <div className="ff-popup-chip  flex flex-align-center flex-justify-start text-left">
          <Queue size={18} className="ff-popup-icon" />
          <div className="ff-popup-text">Save to playlist</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
