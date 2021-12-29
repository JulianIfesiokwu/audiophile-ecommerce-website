import React from "react";
import NavList from "../NavList/Navlist.component";

import './Navigation.styles.css';

import logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logo} alt="logo" className="logo"/>
            <NavList />
            <img src={ShoppingCart} alt="shopping-cart" className="shopping-cart" />           
            
        </div>
    )

}

export default Navigation;