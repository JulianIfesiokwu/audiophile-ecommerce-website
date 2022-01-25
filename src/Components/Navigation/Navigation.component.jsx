import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "../NavList/Navlist.component";
import Modal from "react-modal";

import './Navigation.styles.css';

import logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';

const Navigation = (props) => {
    const { cartItems, onAdd } = props;
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

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
                    <p className="modal-info">cart (<span className="modal-product-total">{cartItems.length}</span>)</p>
                    <button className="remove-btn">Remove all</button>
                </div>
                <div className="modal-main">
                    <div>{
                        cartItems.length === 0 && <div className="empty">Cart Is Empty</div>
                        }
                    </div>
                    <div className="cart-items">
                        {cartItems.map((cartItem) => (
                            <div key ={cartItem.id} className="item">
                                <div className="cart-item-img"><img src={cartItem.img} alt={cartItem.name} /></div>
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{cartItem.name}</p>
                                    <p className="cart-item-price">{cartItem.price}</p>
                                </div>
                                <div></div>
                            </div>
                        ))}
                    </div>

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