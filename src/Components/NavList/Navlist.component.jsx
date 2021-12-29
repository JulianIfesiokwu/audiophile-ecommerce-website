import React from "react";
import { Link } from "react-router-dom";

import './Navlist.styles.css';


const NavList = () => {
    return (
        <ul className="navlist">
            <Link className="link" to="/home">
                <li>HOME</li>
            </Link>
            <Link className="link" to="/headphones">
                <li>HEADPHONES</li>
            </Link>
            <Link className="link" to="/speakers">
                <li>SPEAKERS</li>
            </Link>
            <Link className="link" to="/earphones">
                <li>EARPHONES</li>
            </Link>
        </ul>
    )
}

export default NavList;