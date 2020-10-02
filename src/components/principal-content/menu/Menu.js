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
            <label htmlFor="chk" className="show-menu-btn">
                <i className="fas fa-bars"></i>
            </label>

            <ul className="menu navbar-option">
                <MenuList menuData={menuData} />
                <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times"></i>
                </label>
            </ul>
        </div>
    );
}

export default Menu;