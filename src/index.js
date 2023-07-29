import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import { WatchLaterProvider } from "./contexts/WatchLaterContext";

import "./index.css";

ReactDOM.render(
    <Router>
        <PlaylistProvider>
            <WatchLaterProvider>
                <CategoriesProvider>
                    <App />
                </CategoriesProvider>
            </WatchLaterProvider>
        </PlaylistProvider>
    </Router>,
    document.getElementById("root")
);
