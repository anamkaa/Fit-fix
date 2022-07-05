import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import VideoCard from "../components/VideoCard";
import CategoryBar from "../components/CategoryBar";
import { ArrowCircleUp } from "phosphor-react";
import { videos } from "../backend/db/videos";
import { useFilter } from "../context/filter-context";
import { filterByCategory } from "../utility";
import { filterBySearch } from "../utility";
import { sortByDate } from "../utility";

const VideoListingPage = () => {
  const {
    filterState: { byCategory, bySearch, bySort },
  } = useFilter();

  const filteredByCategory = filterByCategory(videos, byCategory);
  const filteredBySearch = filterBySearch(filteredByCategory, bySearch);
  const sortedByDate = sortByDate(filteredBySearch, bySort);

  return (
    <>
      <Navbar />
      <ArrowCircleUp
        size={36}
        weight="fill"
        className="ff-arrowup"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          <CategoryBar />

          <div className="ff-container-video-card">
            {sortedByDate.map((item) => {
              return <VideoCard videos={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoListingPage;
