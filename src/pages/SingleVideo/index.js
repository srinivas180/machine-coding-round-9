import { useContext, useState } from "react";
import { useParams } from "react-router";

import { Header } from "../../components/Header";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import { videos } from "../../db/videos";

import "./index.css";

export function SingleVideo() {
    const { videoId } = useParams();
    const { playlists, createNewPlaylist, addVideoToPlaylist } =
        useContext(PlaylistContext);
    const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
    console.log("rendering", playlists);

    const [newPlaylist, setNewPlaylist] = useState({
        name: "",
        description: "",
    });
    const video = videos.find((video) => video._id === Number(videoId));
    const moreVideos = videos.filter((video) => video._id !== Number(videoId));

    return (
        <div className="container">
            <Header />
            <div className="page single-video">
                {/* <h2 className="page__title">Single Video</h2> */}
                <img
                    className="single-video__thumbnail"
                    src={video.thumbnail}
                />
                <div className="single-video__data">
                    <div className="single-video__creator-img-and-title">
                        <img
                            className="single-video__creator-img"
                            src="https://picsum.photos/40/40"
                        />
                        <h2>{video.title}</h2>
                    </div>
                    <div className="single-video__icons">
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#000000"
                                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
                                />
                            </svg>
                        </div>
                        <div
                            className="icon"
                            onClick={() => setShowAddToPlaylistModal(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#000000"
                                    d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"
                                />
                            </svg>
                        </div>
                        <div
                            className="modal"
                            style={{
                                display: showAddToPlaylistModal
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <div
                                className="close-icon"
                                onClick={() => {
                                    console.log("clicked");
                                    setShowAddToPlaylistModal(false);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#000000"
                                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.59-13L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
                                    />
                                </svg>
                            </div>
                            <div className="modal__content">
                                <div className="new-playlist">
                                    <h3>Add to playlist</h3>
                                    <input
                                        type="text"
                                        placeholder="Enter title of your playlist"
                                        onChange={(e) =>
                                            setNewPlaylist((newPlaylist) => ({
                                                ...newPlaylist,
                                                name: e.target.value,
                                            }))
                                        }
                                        value={newPlaylist.name}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Write a description"
                                        onChange={(e) =>
                                            setNewPlaylist((newPlaylist) => ({
                                                ...newPlaylist,
                                                description: e.target.value,
                                            }))
                                        }
                                        value={newPlaylist.description}
                                    />
                                    <button
                                        onClick={() => {
                                            createNewPlaylist(newPlaylist);
                                            setNewPlaylist({
                                                name: "",
                                                description: "",
                                            });
                                        }}
                                    >
                                        Create New Playlist
                                    </button>
                                </div>
                                <hr />
                                <div>
                                    {playlists.length === 0
                                        ? "No playlists available."
                                        : playlists.map((p) => (
                                              <button
                                                  onClick={(e) => {
                                                      console.log(
                                                          e.target.value
                                                      );
                                                      addVideoToPlaylist(
                                                          e.target.value,
                                                          video
                                                      );
                                                  }}
                                                  value={p.name}
                                              >
                                                  {p.name}
                                              </button>
                                          ))}
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#000000"
                                    d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71l-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3l-2.12-2.12z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="note">
                    <h2>My Notes</h2>
                </div>
            </div>
            <div className="recommended-videos">
                <h2>More Videos</h2>
                {moreVideos.map((video) => (
                    <div className="recommended-video">
                        <div>
                            <img
                                className="recomended-video__img"
                                src={video.thumbnail}
                            />
                        </div>
                        <div className="recommended-video__title-and-creator">
                            <h4 className="recommended-video__heading">
                                {video.title}
                            </h4>
                            <span>{video.creator}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
