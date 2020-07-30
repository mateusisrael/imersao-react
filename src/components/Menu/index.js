import React from 'react';
import Logo from '../../assets/LogoMain.png';
import ButtonLink from './ButtonLink'
import { Link } from 'react-router-dom';
import './Menu.css'

import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="logo"></img>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    );
}

export default Menu;
