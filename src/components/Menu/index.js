import React from 'react';
import Logo from '../../assets/LogoMain.png'
import './Menu.css'
// import ButtonLink from '../ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Início
            </Button>
        </nav>
    );
}

export default Menu;
