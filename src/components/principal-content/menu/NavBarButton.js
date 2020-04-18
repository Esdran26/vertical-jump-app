import React from 'react';

const NavBarButton = (props) => {
    return(
        <div className="navbar-button">
            <a href="#">{props.getStarted}</a>
        </div>
    );
}

export default NavBarButton;