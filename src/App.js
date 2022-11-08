import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VideoListingPage from "./pages/VideoListingPage";
import VideoPage from "./pages/VideoPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LikedVideos from "./pages/LikedVideos";
import PlaylistPage from "./pages/PlaylistPage";
import WatchlaterPage from "./pages/WatchlaterPage";
import HistoryPage from "./pages/HistoryPage";
import { RequireAuth } from "./components/RequireAuth";
import SinglePlaylistPage from "./pages/SinglePlaylistPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/videoListingPage/:categoryName"
          element={<VideoListingPage />}
        />
        <Route path="/videoPage/:videoId" element={<VideoPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/likedVideos"
          element={
            <RequireAuth>
              <LikedVideos />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <PlaylistPage />
            </RequireAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchlaterPage />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          }
        />
        <Route path="/singlePlaylist/:playlistId" element={<SinglePlaylistPage/>} />
      </Routes>
    </div>
  );
}

export default App;
