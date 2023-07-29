import { createContext, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
    const [playlists, setPlaylists] = useState([]);

    function addVideoToPlaylist(playlistName, video) {
        setPlaylists((playlists) => {
            playlists.map((playlist) => {
                console.log("1", playlist.name);
                console.log("2", playlistName);

                return playlist.name == playlistName
                    ? { ...playlist, videos: [...playlist.videos, video] }
                    : playlist;
            });
            console.log(playlists);
        });
    }

    function createNewPlaylist(playlist) {
        setPlaylists((playlists) => [...playlists, playlist]);
    }

    return (
        <PlaylistContext.Provider
            value={{ playlists, addVideoToPlaylist, createNewPlaylist }}
        >
            {children}
        </PlaylistContext.Provider>
    );
}
