import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VideoListingPage from "./pages/VideoListingPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videoListingPage" element={<VideoListingPage />} />
        <Route path="/videoPage" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
