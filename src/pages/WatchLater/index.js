import { useContext } from "react";

import { Header } from "../../components/Header";
import { Video } from "../../components/Video";

import { WatchLaterContext } from "../../contexts/WatchLaterContext";

import "./index.css";

export function WatchLater() {
    const { watchLater } = useContext(WatchLaterContext);

    return (
        <div className="container">
            <Header />
            <div className="page">
                <h2 className="page__title">Watch Later</h2>
                <div className="videos">
                    {watchLater.map((video) => (
                        <Video key={video._id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}
