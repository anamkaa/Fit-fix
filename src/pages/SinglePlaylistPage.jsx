import { useParams } from "react-router-dom";
import { SinglePlaylistCard } from "../components/SinglePlaylistCard";
import { usePlaylists } from "../context/playlists-context";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const SinglePlaylistPage = () => {
  const {
    playlistsState: { playlists },
  } = usePlaylists();

  const { playlistId } = useParams();

  const currPlaylist = playlists?.find((item) => item._id === playlistId);

  return (
    <>
      <Navbar />

      <div className="ff-container">
        <Aside />

        <div className="ff-container-content">
          <div className="h4">{currPlaylist.title}</div>

          <div className="ff-container-video-card">
            <SinglePlaylistCard playlist={currPlaylist} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePlaylistPage;
