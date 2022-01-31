import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "../NavList/Navlist.component";
import Modal from "react-modal";
import Dropdown from "../Dropdown/Dropdown.component";

import './Navigation.styles.css';

import logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg';

Modal.setAppElement('#root');

const Navigation = (props) => {
    const { cartItems, onAdd, onRemove, removeAll } = props;
    // Cart modal
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    // hamburger menu
    const [dropdown, setDropdown] = useState(false)

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const grandTotal = Math.round( itemsPrice )

    return (
        <div className="navigation">
            <div className="hamburger-container">
                <img 
                onClick={() => setDropdown(!dropdown)}
                className="hamburger-icon" 
                src={HamburgerIcon} alt="" />
            </div>
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
                    <button 
                    onClick={() => removeAll()}
                    className="remove-btn">Remove all</button>
                </div>
                <div className="modal-main">
                    <div>{
                        cartItems.length === 0 && <div className="empty">Checkout button disabled because Cart Is Empty</div>
                        }
                    </div>
                    <div className="cart-items">
                        <>
                        {cartItems.map((cartItem) => (
                            <div key ={cartItem.id} className="item">
                                <div className="col-1">
                                    <div className="cart-item-img">
                                        <img src={cartItem.img} alt={cartItem.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <p className="cart-item-name">{cartItem.name}</p>
                                        <p className="cart-item-price">$ {cartItem.price}</p>
                                    </div>
                                </div>
                                <div className="item-quantity">
                                    <button 
                                    onClick={() => onRemove(cartItem)}
                                    className="reduce-item">-</button>
                                    <button className="number">{cartItem.qty}</button>
                                    <button 
                                    onClick={() => onAdd(cartItem)}
                                    className="increase-item">+</button>
                                </div>
                                
                            </div>
                        ))}
                        </>
                        <div className="total-container">
                            <p className="total">Total</p>
                            <p className="total-amount">$ {grandTotal}</p>
                        </div>
                    </div>

                </div>
            
            <Link to="/checkout">
                <button className="checkout-btn"
                disabled={cartItems.length < 1}
                onClick={() => setModalIsOpen(true) }
                >
                checkout
                </button>
            </Link>           
            
            </Modal>
            {dropdown && <Dropdown setDropdown={setDropdown} dropdown={dropdown} />    }
            
        </div>
    )

}

export default Navigation;