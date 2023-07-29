import { NavLink } from "react-router-dom";

import "./index.css";

export function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Viddi</h1>

            <nav className="nav">
                <NavLink
                    className="nav__link link--decor-none link--black"
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className="nav__link link--decor-none link--black"
                    to="/explore/all"
                >
                    Explore
                </NavLink>
                <NavLink
                    className="nav__link link--decor-none link--black"
                    to="/playlists"
                >
                    Playlists
                </NavLink>
                <NavLink
                    className="nav__link link--decor-none link--black"
                    to="/watch-later"
                >
                    Watch Later
                </NavLink>
            </nav>
        </div>
    );
}
