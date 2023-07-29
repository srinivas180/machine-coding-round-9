import { createContext, useState } from "react";

export const WatchLaterContext = createContext();

export function WatchLaterProvider({ children }) {
    const [watchLater, setWatchLater] = useState([]);

    function addVideoToWatchLater(video) {
        setWatchLater((watchLater) => [...watchLater, video]);
    }

    function removeVideoFromWatchLater(videoId) {
        setWatchLater((watchLater) =>
            watchLater.filter((video) => video._id !== videoId)
        );
    }

    function watchLaterHasVideo(videoId) {
        return watchLater.find((video) => video._id === videoId);
    }

    return (
        <WatchLaterContext.Provider
            value={{
                watchLater,
                addVideoToWatchLater,
                removeVideoFromWatchLater,
                watchLaterHasVideo,
            }}
        >
            {children}
        </WatchLaterContext.Provider>
    );
}
