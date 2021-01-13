import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

const menu = [
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2006-2010",
]

class Menu extends React.Component {
    // click = (page: string) => {
    //     this.setState({page: page});
    // };

    render() {
        return (
            <nav className="nav nav-masthead justify-content-center">
                <Router>
                    {menu.map(m =>
                        <NavLink key={m} className="nav-link" activeClassName="active" to={m}>{m}</NavLink>
                    )}
                </Router>
            </nav>
        )
    }
}

export default Menu;