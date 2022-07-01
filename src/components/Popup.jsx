import { ClockAfternoon, ClockCounterClockwise, Queue } from "phosphor-react";
import React from "react";

const Popup = () => {
  return (
    <>
      <div className="ff-popup">
        <div className="ff-popup-chip ">
          <ClockAfternoon size={18} className="ff-popup-icon" />

          <div className="ff-popup-text">Save to watchlater</div>
        </div>

        <div className="ff-popup-chip ">
          <Queue size={18} className="ff-popup-icon" />

          <div className="ff-popup-text">Save to playlist</div>
        </div>

        <div className="ff-popup-chip ">
          <ClockCounterClockwise size={18} className="ff-popup-icon" />

          <div className="ff-popup-text">Remove from history</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
