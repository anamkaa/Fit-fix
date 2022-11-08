import React from "react";
import { Plus, X } from "phosphor-react";

const AddToPlaylistModal = () => {
  return (
    <>
      <div className="ff-popup">
        <div className="ff-popup-chip  flex flex-align-center flex-justify-space-btw text-left">
          <div className="ff-popup-text h6 text-bold">Save to ...</div>
          <X size={16} weight="bold" />
        </div>

        <div className="ff-popup-chip flex flex-align-center flex-justify-start text-left">
          <label htmlFor="playlist" className="ff-popup-text">
            <input type="checkbox" name="" id="playlist" />
          </label>
        </div>

        <div className="ff-popup-chip  flex flex-align-center flex-justify-start text-left">
          <Plus size={14} className="ff-popup-icon" weight="bold" />
          <div className="ff-popup-text">Create new playlist</div>
        </div>

        <div className="ff-popup-chip  flex flex-align-center flex-justify-space-btw text-left">
          <input
            type="text"
            placeholder="Enter playlist name"
            className="ff-popup-text"
          />

          <button
            className="btn-sm btn btn-warning-ghost"
            style={{ margin: "0" }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToPlaylistModal;
