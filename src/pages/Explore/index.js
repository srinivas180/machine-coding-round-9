import { useParams } from "react-router";

import { videos } from "../../db/videos";

import { Header } from "../../components/Header";

import "./index.css";
import { Video } from "../../components/Video";

export function Explore() {
    const { category } = useParams();
    const filteredVideos =
        category === "all"
            ? videos
            : videos.filter((video) => video.category === category);

    return (
        <div className="container">
            <Header />
            <div className="page">
                <h2 className="page__title">
                    {category === "all" ? "All Videos" : category}
                </h2>
                <div className="videos">
                    {filteredVideos.map((video) => (
                        <Video key={video._id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}
