import React, {FC} from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import Menu from "./components/menu";
import Page from "./components/page";

const App: FC = () => (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Router>
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="masthead-brand">
                        <NavLink to="/">Multimatograf</NavLink>
                    </h3>
                    <Menu/>
                </div>
            </header>

            <main role="main" className="inner cover">
                <Route path="*" component={Page}/>
            </main>
        </Router>
    </div>);

export default App;