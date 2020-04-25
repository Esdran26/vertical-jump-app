import React, { useState } from 'react';
import './css/Menu.css';

const Menu = () => {
    return(
        
        <div className="header navbar">
            <div className="navbar-logo">
                <h3>
                    <a href="#">VOLEIBOL</a>
                </h3>
            </div>
            <input type="checkbox" id="chk" />
            <label for="chk" class="show-menu-btn">
                <i class="fas fa-bars"></i>
            </label>

            <ul class="menu navbar-option">
                <a id="home" href="#">Incio</a>
                <a id="content" href="#question">Porqué Salto Vertical?</a>
                <a href="#">Jugadores Profesionales</a>
                <a target="_blank" href="https://github.com/Esdran26/vertical-jump-app">Ver Repositorio</a>
                <label for="chk" class="hide-menu-btn">
                    <i class="fas fa-times"></i>
                </label>
            </ul>
        </div>
    );
}

export default Menu;