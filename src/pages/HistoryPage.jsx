import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { useHistory } from "../context/history-context";
import DisplayVideoCard from "../components/DisplayVideoCard";
import { useAuth } from "../context/auth-context";
import { deleteAllHistoryService } from "../services/history-services";

const PlaylistPage = () => {
  const {
    user: { isLogged, tokenVal },
  } = useAuth();
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const deleteAllHistory = () => {
    if (isLogged) {
      deleteAllHistoryService(tokenVal, historyDispatch);
    }
  };
  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />
        <div className="ff-container-content">
          <div
            className="ff-category-text btn btn-warning btn-warning-hover ff-btn-secondary"
            onClick={() => {
              deleteAllHistory();
            }}
            style={{ maxWidth: "90px" }}
          >
            Clear
          </div>
          {history.length
            ? history.map((item) => {
                return <DisplayVideoCard video={item} key={item._id} />;
              })
            : "No History"}
        </div>
      </div>
    </>
  );
};

export default PlaylistPage;
