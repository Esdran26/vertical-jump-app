import React, { useState } from 'react';
import './css/Menu.css';


const Menu = () => {
    return(
        <nav class="navbar">
            <div className="navbar-logo">
                <h3>
                    <a href="#">VOLEIBOL</a>
                </h3>
            </div>

            <input type="checkbox" id="nav_menu_checkbox" />
            <label for="nav_menu_checkbox" class="nav_menu_icon">menu</label>

            <div class="nav_menu_container">
                <label for="nav_menu_checkbox" class="nav_menu_close">close</label>

                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Porque Salto Vertical?</a></li>
                    <li><a href="">Jugadores Profesionales</a></li>
                    <li><a id="navbar-button" href="">Empezar</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Menu;