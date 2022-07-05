import React, { useState } from "react";
import { Funnel } from "phosphor-react";
import SortPopup from "./SortPopup";
import { useFilter } from "../context/filter-context";

const CategoryBar = () => {
  const [sortPopup, setsortPopup] = useState(false);
  const { filterDispatch } = useFilter();

  return (
    <>
      <div
        className="ff-container-options flex flex-align-center flex-justify-space-btw"
        id="category"
      >
        <div className="ff-container-content-category flex flex-align-center flex-wrap">
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "all" });
            }}
          >
            All
          </div>
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "yoga" });
            }}
          >
            Yoga
          </div>
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "pilates",
              });
            }}
          >
            Pilates
          </div>
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "cardio" });
            }}
          >
            Cardio
          </div>
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              filterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "strength",
              });
            }}
          >
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
