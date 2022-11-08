import { createContext, useContext ,useState} from "react";

const PlaylistModalContext = createContext();

export const PlaylistModalProvider = ({children}) => {

    const [isPlaylistModalOpen, setisPlaylistModalOpen] = useState(false);
    const [isCreatePlaylistModalOpen , setisCreatePlaylistModalOpen] = useState(false);

    return (
        <PlaylistModalContext.Provider value={{isPlaylistModalOpen, setisPlaylistModalOpen,isCreatePlaylistModalOpen , setisCreatePlaylistModalOpen}}>
            {children}
        </PlaylistModalContext.Provider>
    )
}

export const usePlaylistModal = () => useContext(PlaylistModalContext);