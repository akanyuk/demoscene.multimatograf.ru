import React from 'react';
import {NavLink} from "react-router-dom";

import {Pages} from "./page";

class Menu extends React.Component {
    render() {
        return (
            <nav className="nav nav-masthead justify-content-center">
                {Pages.map(m =>
                    <NavLink key={m} className="nav-link" activeClassName="active" to={m}>{m}</NavLink>
                )}
            </nav>
        )
    }
}

export default Menu;