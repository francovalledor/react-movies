import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import { MovieDetails } from "../pages/MovieDetails";
import { Person } from "../pages/Person";
import { Popular } from "../pages/Popular";
import { TopRated } from "../pages/TopRated";
import { Upcoming } from "../pages/Upcoming";

export function Navbar() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/toprated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/popular">Popular</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <TopRated/>
                    </Route>
                    <Route path="/movies/:id">
                        <MovieDetails/>
                    </Route>
                    <Route path="/person/:id">
                        <Person/>
                    </Route>
                    <Route path="/popular">
                        <Popular/>
                    </Route>
                    <Route path="/upcoming">
                        <Upcoming/>
                    </Route>
                    <Route path="/toprated">
                        <TopRated/>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}