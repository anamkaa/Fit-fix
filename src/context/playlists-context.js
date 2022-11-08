import { createContext, useContext, useReducer } from "react";
import { playlistsReducer } from "../reducer/reducer-playlists";

const PlaylistsContext = createContext();

export const PlaylistsProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(playlistsReducer, {
    playlists: [],
    // singleplaylist: {},
  });

  return (
    <PlaylistsContext.Provider value={{ playlistsState, playlistsDispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export const usePlaylists = () => useContext(PlaylistsContext);
