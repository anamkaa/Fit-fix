import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "../src/context/filter-context";
import { AuthProvider } from "./context/auth-context";
import { LikesProvider } from "./context/likes-context";
import { VideoProvider } from "./context/video-context";
import { WatchlaterProvider } from "./context/watchlater-context";
import { HistoryProvider } from "./context/history-context";
import { PlaylistsProvider } from "./context/playlists-context";
import { PlaylistModalProvider } from "./context/playlistModal-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <LikesProvider>
            <WatchlaterProvider>
              <HistoryProvider>
                <PlaylistsProvider>
                  <FilterProvider>
                    <PlaylistModalProvider>
                    <App />
                    </PlaylistModalProvider>
                  </FilterProvider>
                </PlaylistsProvider>
              </HistoryProvider>
            </WatchlaterProvider>
          </LikesProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
