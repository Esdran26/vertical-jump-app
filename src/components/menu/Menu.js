import React from 'react';
import './css/Menu.css';
import NavBarButton from './NavBarButton';


const NavBarLink = (props) => {
    return(
        <div className="navbar-link">
            <a href="#">{props.home}</a>
            <a href="#">{props.question}</a>
            <a href="#">{props.players}</a>
        </div>
    );
}

const NavBarOption = () => {
    return(
        <div className="navbar-option">
            <NavBarLink 
                home="Inicio"
                question="Porque Salto Vertical?"
                players="Jugadores Profesionales"     
            />
            <NavBarButton getStarted="Empezar" />
        </div>
    );
}

const NavBarLogo = (props) => {
    return(
        <div className="navbar-logo">
            <h3>
                <a href="#">{props.logo}</a>
            </h3>
        </div>
    );
}

const NavBarVerticalJumpMenu = () => {
    return(
        <div className="navbar">
            <NavBarLogo logo="VOLEIBOL" />
            <NavBarOption />
        </div>
    );
}

const Menu = () => {
    return(
        <NavBarVerticalJumpMenu />
    );
}

export default Menu;