import { SortAscending, SortDescending } from "phosphor-react";
import React from "react";
import { useFilter } from "../context/filter-context";

const SortPopup = () => {
  const { filterDispatch } = useFilter();

  return (
    <>
      <div className="ff-popup-sort text-orange">
        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
            onChange={() => {
              filterDispatch({ type: "SORT_BY_DATE", payload: "newest" });
            }}
          />
          <SortAscending size={18} className="ff-popup-icon" />
          Date Added (newest)
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
            onChange={() => {
              filterDispatch({ type: "SORT_BY_DATE", payload: "oldest" });
            }}
          />
          <SortDescending size={18} className="ff-popup-icon" />
          Date Added (oldest)
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <input
            type="radio"
            name="sort-input"
            id=""
            className="ff-popup-text"
            onChange={() => {
              filterDispatch({ type: "SORT_BY_DATE", payload: "clear" });
            }}
          />
          Clear
        </div>
      </div>
    </>
  );
};

export default SortPopup;
