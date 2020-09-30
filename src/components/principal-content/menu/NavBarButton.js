import React from 'react';
import { Link } from "react-router-dom";

const NavBarButton = props => {
    return(
        <div className="navbar-button">
            <Link to="/login">{props.getStarted}</Link>
        </div>
    );
}

export default NavBarButton;