import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "../NavList/Navlist.component";
import Modal from "react-modal";

import './Navigation.styles.css';

import logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';

const Navigation = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    return (
        <div className="navigation">
            <img src={logo} alt="logo" className="logo"/>
            <NavList />
            <img
            onClick={() => setModalIsOpen(true)}
            src={ShoppingCart}
            alt="shopping-cart"
            className="shopping-cart" />

            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel={"shopping-cart"}
            className="modal-body"
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  zIndex: '2'
                }
            }}
            >
                <div className="modal-header">
                    <p className="modal-info">cart (<span className="modal-product-total">3</span>)</p>
                    <button className="remove-btn">Remove all</button>
                </div>
                <div className="modal-main">

                </div>
            
            <Link to="/checkout">
                <button className="checkout-btn"
                onClick={() => setModalIsOpen(false)}
                >
                checkout
                </button>
            </Link>           
            
            </Modal>    
            
        </div>
    )

}

export default Navigation;