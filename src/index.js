import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { CategoriesProvider } from "./contexts/CategoriesContext";

import "./index.css";

ReactDOM.render(
    <Router>
        <CategoriesProvider>
            <App />
        </CategoriesProvider>
    </Router>,
    document.getElementById("root")
);
