import React, { useState } from 'react';
import './css/Menu.css';

const NavBarLogo = (props) => {
    return(
        <div className="navbar-logo">
            <h3>
                <a href="#">{props.logo}</a>
            </h3>
        </div>
    );
}

const NavBarMenuContainer = (props) => {
    return(
        <div class="nav_menu_container">
            <label for="nav_menu_checkbox" class="nav_menu_close">close</label>

            <ul>
                <li><a href="#home">{props.home}</a></li>
                <li><a href="#question">{props.question}</a></li>
                <li><a href="">{props.player}</a></li>
                <li><a id="navbar-button" href="">{props.getStarted}</a></li>
            </ul>
        </div>
    );
}

const Menu = () => {
    return(
        <nav class="navbar">
            <NavBarLogo logo="VOLEIBOL" />

            <input type="checkbox" id="nav_menu_checkbox" />
            <label for="nav_menu_checkbox" class="nav_menu_icon">menu</label>

            <NavBarMenuContainer 
                home="Inicio"
                question="Porque Salto Vertical?"
                player="Jugadores Profesionales"
                getStarted="Empezar"
            />

        </nav>
    );
}

export default Menu;