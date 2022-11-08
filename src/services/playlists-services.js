import axios from "axios";

export const createPlaylistServices = async (
  playlist,
  token,
  playlistsDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists`,
      {
        playlist,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    playlistsDispatch({
      type: "CREATE_PLAYLIST",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlaylistService = async (
  playlistId,
  token,
  playlistsDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });

    playlistsDispatch({
      type: "DELETE_PLAYLIST",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addVideoToPlaylistService = async (
  playlistId,
  video,
  token,
  playlistsDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    playlistsDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
    console.warn(response.data.playlist);
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideoFromPlaylistService = async (
  token,
  playlistId,
  videoId,
  playlistsDispatch
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    playlistsDispatch({
      type: "DELETE_VIDEO_FROM_PLAYLIST",
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePlaylistService = async (
  playlistId,
  token,
  playlistsDispatch
) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });

    playlistsDispatch({
      type: "GET_SINGLE_PLAYLIST",
      payload: response.data.playlist,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPlaylistsService = async (token, playlistsDispatch) => {
  try {
    const response = await axios.get(`/api/user/playlists`, {
      headers: {
        authorization: token,
      },
    });
    playlistsDispatch({
      type: "GET_ALL_PLAYLISTS",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.log(error);
  }
};
