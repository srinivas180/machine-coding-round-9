import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="explore/:category" element={<Explore />} />
            </Routes>
        </div>
    );
}

export default App;
