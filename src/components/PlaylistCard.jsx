import React from "react";
import { usePlaylists } from "../context/playlists-context";
import { deletePlaylistService } from "../services/playlists-services";
import { useAuth } from "../context/auth-context";
import { Queue, TrashSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export const PlaylistCard = ({ playlist }) => {
  const {
    user: { tokenVal },
  } = useAuth();

  const {
    playlistsState: { playlists },
    playlistsDispatch,
  } = usePlaylists();

  const currentPlaylist = playlists?.find((item) => item._id === playlist._id);

  const playlistcardImage = currentPlaylist?.videos[0]?.imgSrc;

  const deletePlaylist = () => {
    deletePlaylistService(playlist._id, tokenVal, playlistsDispatch);
  };

  return (
    <>
      <div className="playlist-card-wrap">
        <div className="playlist-card-header flex flex-align-center flex-justify-space-btw">
          <span className="playlist-card-title text-bold">
            {" "}
            {playlist.title}
          </span>{" "}
          <TrashSimple size={16} onClick={() => deletePlaylist()} />
        </div>
        {playlist.videos.length ? (
          <Link to={`/singlePlaylist/${playlist._id}`}>
            <div className="playlist-card-image-wrap flex flex-col">
              <img src={playlistcardImage} alt="" className="image-sm" />
              <div className="playlist-backdrop flex flex-align-center flex-justify-center">
                <div className="playlist-card-content flex flex-align-center flex-justify-center">
                  <Queue size={20} weight="bold" /> {playlist.videos.length}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <span>Playlist is empty</span>
        )}
      </div>
    </>
  );
};
