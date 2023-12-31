import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { WatchLater } from "./pages/WatchLater";
import { SingleVideo } from "./pages/SingleVideo";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="explore/:category" element={<Explore />} />
                <Route path="/watch-later" element={<WatchLater />} />
                <Route path="/video/:videoId" element={<SingleVideo />} />
            </Routes>
        </div>
    );
}

export default App;
