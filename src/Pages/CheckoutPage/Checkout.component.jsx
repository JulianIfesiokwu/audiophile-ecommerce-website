import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import orderApproved from "../../assets/cart/Order-accepted.svg";

import "./Checkout.styles.css";

import CashImage from "../../assets/Shape.png"
const Checkout =  (props) => {
    const { cartItems, removeAll } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const vat = Math.round( (itemsPrice * 0.2).toFixed(2) )
    const shipping = cartItems.length < 1 ? `0` : `50`
    const grandTotal = Math.round( +shipping + itemsPrice + vat )
    
    const navigate = useNavigate();
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [country, setCountry] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value)
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (

        <div className="checkout">
            <button 
            className="back-checkout"
            onClick={() => navigate(-1)}>Go Back</button>
            <form onSubmit={handleSubmit}>
                <div className="checkout-information">
                    <div className="billing-details">
                        <h2 className="billing-title">checkout</h2>
                        
                            <section className="personal-info">
                                <h2 className="section-title">billing details</h2>
                                <div className="section-field">
                                    <div className="half">
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                        type="text" 
                                        placeholder="Alexei Ward" 
                                        id="name" 
                                        onChange={handleNameChange}
                                        value={name}
                                        required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                        type="email" 
                                        placeholder="alexei@mail.com" 
                                        id="email" 
                                        onChange={handleEmailChange}
                                        value={email}
                                        required/>
                                    </div>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input 
                                        type="number" 
                                        placeholder="+1 202-555-0136" 
                                        id="phone" 
                                        onChange={handlePhoneChange}
                                        value={phone}
                                        required/>
                                    </div>

                                </div>
                            </section>
                            <section className="shipping-info">
                                <h2 className="section-title">shipping info</h2>
                                <div className="section-field">
                                    <div className="field" id="address">
                                        <label htmlFor="name">Address</label>
                                        <input 
                                        type="text" 
                                        placeholder="1137 Williams Avenue" 
                                        id="address"
                                        onChange={handleAddressChange}
                                        value={address} 
                                        required/>
                                    </div>
                                    <div className="half">
                                    <div className="field">
                                        <label htmlFor="zip code">Zip Code</label>
                                        <input 
                                        type="number" 
                                        placeholder="10001" 
                                        id="zip code" 
                                        onChange={handleZipCodeChange}
                                        value={zipCode} 
                                        required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="city">City</label>
                                        <input type="text" placeholder="New York" id="city" required/>
                                    </div>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="country">Country</label>
                                        <input 
                                        type="text" 
                                        placeholder="United States" 
                                        id="country" 
                                        onChange={handleCountryChange}
                                        value={country} 
                                        required/>
                                    </div>

                                </div>
                            </section>
                            <section className="payment-details">
                                <h2 className="section-title">payment details</h2>
                                <div className="section-field">
                                    <div className="section-row-one">
                                        <p className="payment-method">Payment Method</p>
                                        <div className="radio-fields">
                                            <div className="radio-container">
                                                <input type="radio" name="payment-type" required/>
                                                <label className="radio-label" htmlFor="e-money">e-Money</label>
                                            </div>
                                            <div className="radio-container">
                                                <input type="radio" name="payment-type" required/>
                                                <label className="radio-label" htmlFor="e-money">Cash on Delivery</label>
                                            </div>
                            
                                        </div>
                                    </div>

                                    <div className="section-row-two">
                                        <div className="e-money-details">
                                            <div className="e-money">
                                                <label htmlFor="e-money number">e-Money Number</label>
                                                <input type="number" placeholder="238521993" id="country"/>
                                            </div>
                                            <div className="e-money">
                                                <label htmlFor="e-money number">e-Money PIN</label>
                                                <input type="number" placeholder="6891" id="country"/>
                                            </div>                                            
                                        </div>
                                        <div className="about-cash-on-delivery">
                                            <div className="img-container">
                                                <img src={CashImage} alt="" />
                                            </div>
                                            <p className="details-cash-on-delivery">
                                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        
                    </div>
                    <div className="summary">
                    <div>{
                            cartItems.length === 0 && <div className="empty">Cart Is Empty</div>
                            }
                        </div>
                        <div className="product-summary">
                            {cartItems.map((cartItem) => (
                                <div key ={cartItem.id} className="item">

                                    <div className="row">
                                        <div className="col-1">
                                            <div className="cart-item-img">
                                                <img src={cartItem.img} alt={cartItem.name} />
                                            </div>
                                            <div className="cart-item-details">
                                                <p className="cart-item-name">{cartItem.name}</p>
                                                <p className="cart-item-price">$ {cartItem.price}</p>
                                            </div>
                                        </div>
                                        <p className="total-quantity">x{cartItem.qty}</p>
                                    </div>      
                                </div>
                            ))}</div>

                        <div className="">
                            <div className="total-cost">
                                <p className="price-details">total</p>
                                <p className="cost">$ {itemsPrice}</p>
                            </div>
                            <div className="total-cost">
                                <p className="price-details">shipping</p>
                                <p className="cost">$ {
                                    cartItems.length < 1 ? `0` : `50`
                                }</p>
                            </div>
                            <div className="total-cost">
                                <p className="price-details">vat (included)</p>
                                <p className="cost">$ {vat}</p>
                            </div>
                            <div className="total-cost all-cost">
                                <p className="price-details">grand total</p>
                                <p className="grand-total">$ {grandTotal}</p>
                            </div>
                        </div>
                        <button 
                        className="confirmation-btn"
                        type="submit"
                        onClick={() => setModalIsOpen(true)}
                        disabled={!email || !name || !country || !phone || !address || !zipCode}
                        >
                            continue and pay
                        </button>
                    </div>
                </div>
            </form>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel={"shopping-cart"}
                className="confirmation-body"
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
                }}>
                <div className="order-confirmation">
                    <img className="order-approved-icon" src={orderApproved} alt="" />
                    <h2 className="confirmation-title">THANK YOU <br/>FOR YOUR ORDER</h2>
                    <p className="notification">You will receive an email confirmation shortly.</p>
                    <div className="order-summary">
                            {/* <div className="short-detail">
                                <div className="first-item">
                                    <div className="first-line">
                                        <div>{cartItems[0].img}</div>
                                        <div>
                                            <p className="first-item-name">{cartItems[0].name}</p>
                                            <p className="first-item-price">$ {cartItems[0].price}</p>
                                        </div>
                                    </div>
                                    <div className="first-qty">x{cartItems[0].qty}</div>
                                </div>
                                <div className="other-items">
                                    <p>and {cartItems.length - 1} other item(s)</p>
                                </div>
                            </div>                         */}

                        <div className="grand-total-confirm">
                            <p className="all-added">grand total</p>
                            <p className="max-amount">$ {grandTotal}</p>
                        </div>

                    </div>
                    <Link to='/'>
                        <button 
                        onClick={() => removeAll()}
                        className="back-home">back to home</button>
                    </Link>
                </div>
                
            </Modal>    
        </div>

        
    )
}

export default Checkout;