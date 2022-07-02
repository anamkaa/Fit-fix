import React, { useState } from "react";
import { Funnel } from "phosphor-react";
import SortPopup from "./SortPopup";

const CategoryBar = () => {
  const [sortPopup, setsortPopup] = useState(false);

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary">
            All
          </div>
          <div className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary">
            Yoga
          </div>
          <div className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary">
            Pilates
          </div>
          <div className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary">
            Cardio
          </div>
          <div className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary">
            Strength
          </div>
        </div>

        <div
          onClick={() =>
            setsortPopup((sortPopup) => (!sortPopup ? true : false))
          }
          className="flex flex-align-center cursor"
        >
          {/* */}
          <span className="text-orange">Sort</span>
          <Funnel size={12} className="text-orange ff-icon-filter" />
        </div>

        {sortPopup && <SortPopup />}
      </div>
    </>
  );
};

export default CategoryBar;
