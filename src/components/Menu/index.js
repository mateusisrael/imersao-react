import React from 'react';
import Logo from '../../assets/LogoMain.png';
import { Link } from 'react-router-dom';
import './Menu.css'

import Button from '../Button'

const Menu = (props) => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="logo"></img>
            </Link>

            <Button as={Link} to={`${props.to}`} className="ButtonLink">{props.children}</Button>
        </nav>
    );
}

export default Menu;
