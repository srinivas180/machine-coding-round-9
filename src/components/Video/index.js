import { useContext } from "react";
import { Link } from "react-router-dom";

import { WatchLaterContext } from "../../contexts/WatchLaterContext";

import "./index.css";

export function Video({ video }) {
    const {
        watchLaterHasVideo,
        addVideoToWatchLater,
        removeVideoFromWatchLater,
    } = useContext(WatchLaterContext);

    return (
        <div className="video">
            <Link to={`/video/${video._id}`}>
                <div
                    className="video__watch-later-icon"
                    onClick={() => {
                        watchLaterHasVideo(video._id)
                            ? removeVideoFromWatchLater(video._id)
                            : addVideoToWatchLater(video);
                    }}
                >
                    {watchLaterHasVideo(video._id) ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#00875a"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#00875a"
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
                            />
                        </svg>
                    )}
                </div>
                <div>
                    <img className="video__thumbnail" src={video.thumbnail} />
                </div>
                <div className="video__data">
                    <img
                        className="video__creator-img"
                        src=" https://picsum.photos/40/40"
                    />
                    <div className="video__title-and-views">
                        <p>{video.title}</p>
                        <p>
                            {video.views} | {video.creator}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
