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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <LikesProvider>
            <WatchlaterProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </WatchlaterProvider>
          </LikesProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
