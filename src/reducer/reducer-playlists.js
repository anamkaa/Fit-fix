export const playlistsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PLAYLISTS":
      return { ...state, playlists: action.payload };

    case "CREATE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? action.payload.playlistData
            : playlist
        ),
      };

    case "DELETE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? action.payload.playlistData
            : playlist
        ),
      };

    default:
      return { ...state };
  }
};
