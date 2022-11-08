import React from "react";
import { usePlaylists } from "../context/playlists-context";
import { deleteVideoFromPlaylistService } from "../services/playlists-services";
import { useAuth } from "../context/auth-context";
import VideoCard from "../components/VideoCard";
import { TrashSimple } from "phosphor-react";

export const SinglePlaylistCard = ({ playlist }) => {
  const {
    user: { isLogged, tokenVal },
  } = useAuth();

  const {
    playlistsState: { playlists },
    playlistsDispatch,
  } = usePlaylists();

  const currentPlaylist = playlists?.find((item) => item._id === playlist._id);

  const deleteVideoFromPlaylist = (playlistId, videoId) => {
    if (isLogged) {
      deleteVideoFromPlaylistService(
        tokenVal,
        playlistId,
        videoId,
        playlistsDispatch
      );
    }
  };

  return (
    <>
      {currentPlaylist.videos.length
        ? currentPlaylist.videos.map((item) => {
            return (
              <>
                <div className="" style={{ maxWidth: "300px" }}>
                  <VideoCard video={item} key={item._id} />
                  <TrashSimple
                    size={16}
                    onClick={() =>
                      deleteVideoFromPlaylist(currentPlaylist._id, item._id)
                    }
                  />
                </div>
              </>
            );
          })
        : "No videos to show"}
    </>
  );
};
