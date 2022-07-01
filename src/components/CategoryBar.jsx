import React, { useState } from "react";
import { Funnel } from "phosphor-react";
import SortPopup from "./SortPopup";

const CategoryBar = () => {
  const [sortPopup, setsortPopup] = useState(false);

  return (
    <>
      <div className="ff-container-options" id="category">
        <div className="ff-container-content-category">
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
        >
          {/* */}
          <Funnel size={22} className="text-orange ff-icon-filter" />
        </div>

        {sortPopup && <SortPopup />}
      </div>
    </>
  );
};

export default CategoryBar;
