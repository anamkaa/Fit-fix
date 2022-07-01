import { SortAscending, SortDescending } from "phosphor-react";
import React from "react";

const SortPopup = () => {
  return (
    <>
      <div className="ff-popup-sort text-orange">
        <div className="ff-popup-chip ">
          <SortAscending size={18} className="ff-popup-icon" />

          <div className="ff-popup-text">Date Added (newest)</div>
        </div>

        <div className="ff-popup-chip ">
          <SortDescending size={18} className="ff-popup-icon" />

          <div className="ff-popup-text">Date Added (oldest)</div>
        </div>
      </div>
    </>
  );
};

export default SortPopup;
