import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => useContext(VideoContext);
