import React, {useState} from 'react';
import './css/Menu.css';

const menuData = [
    {
        name: 'Inicio',
        href: '/',
    },
    {
        name: 'Porqué Salto Vertical?',
        href: '#question'
    },
    {
        name: 'Jugadores Profesionales',
        href: '#players'
    },
    {
        name: 'Ver Repositorio',
        href: 'https://github.com/Esdran26/vertical-jump-app',
        target: '_blank'
    }
]

const MenuList = (props) => {
    const menuList = props.menuData.map((menu) =>
        <a target={menu.target} href={menu.href} key={menu.toString()}>
            {menu.name}
        </a>
    );

    return menuList;
}

const Menu = () => {
    return(
        
        <div className="header navbar">
            <div className="navbar-logo">
                <h3>
                    <a href="/">VOLEIBOL</a>
                </h3>
            </div>
            <input type="checkbox" id="chk" />
            <label for="chk" class="show-menu-btn">
                <i class="fas fa-bars"></i>
            </label>

            <ul class="menu navbar-option">
                <MenuList menuData={menuData} />
                <label for="chk" class="hide-menu-btn">
                    <i class="fas fa-times"></i>
                </label>
            </ul>
        </div>
    );
}

export default Menu;