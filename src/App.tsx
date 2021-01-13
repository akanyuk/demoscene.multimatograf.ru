import React from 'react';
import {HashRouter, Route, NavLink} from "react-router-dom";

import Menu from "./components/menu";
import Page from "./components/page";

const App = () => {
    return (
        <HashRouter>
            <header className="masthead sticky-top d-flex w-100 p-3 mx-auto flex-column">
                <div className="inner">
                    <h3 className="masthead-brand">
                        <NavLink to="/">Multimatograf</NavLink>
                    </h3>
                    <Menu/>
                </div>
            </header>

            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <Route component={Page}/>
                </main>
            </div>
        </HashRouter>
    );
};

export default App;