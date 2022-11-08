import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { usePlaylists } from "../context/playlists-context";
import { PlaylistCard } from "../components/PlaylistCard";

const PlaylistPage = () => {
  const {
    playlistsState: { playlists },
  } = usePlaylists();

  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          {playlists.length
            ? playlists.map((item) => {
                return <PlaylistCard playlist={item} key={item._id} />;
              })
            : "No Playlists to show"}
        </div>
      </div>
    </>
  );
};

export default PlaylistPage;
