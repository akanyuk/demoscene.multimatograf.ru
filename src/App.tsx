import React from 'react';
import {HashRouter, Route} from "react-router-dom";

import Menu from "./components/menu";
import Page from "./components/page";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <header className="masthead sticky-top d-flex w-100 p-3 mx-auto flex-column">
                    <div className="inner">
                        <Menu/>
                    </div>
                </header>

                <div className="page d-flex w-100 h-100 mx-auto flex-column">
                    <Route component={Page}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;