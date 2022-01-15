import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import orderApproved from "../../assets/cart/Order-accepted.svg";

import "./Checkout.styles.css";
import { useState } from "react";
const Checkout =  () => {
    const navigate = useNavigate();
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    return (

        <div className="checkout">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="checkout-information">
                <div className="billing-details">
                    <h2 className="billing-title">checkout</h2>
                    <form>
                        <section className="personal-info">
                            <h2 className="section-title">billing details</h2>
                            <div className="section-field">
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="Alexei Ward" id="name"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder="alexei@mail.com" id="email"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="number" placeholder="+1 202-555-0136" id="phone"/>
                                </div>

                            </div>
                        </section>
                        <section className="shipping-info">
                            <h2 className="section-title">shipping info</h2>
                            <div className="section-field">
                                <div className="field" id="address">
                                    <label htmlFor="name">Address</label>
                                    <input type="text" placeholder="1137 Williams Avenue" id="address"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="zip code">Zip Code</label>
                                    <input type="number" placeholder="10001" id="zip code"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="city">City</label>
                                    <input type="text" placeholder="New York" id="city"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="country">country</label>
                                    <input type="text" placeholder="United States" id="country"/>
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
                                            <input type="radio" name="payment-type"/>
                                            <label className="radio-label" htmlFor="e-money">e-Money</label>
                                        </div>
                                        <div className="radio-container">
                                            <input type="radio" name="payment-type"/>
                                            <label className="radio-label" htmlFor="e-money">Cash on Delivery</label>
                                        </div>
                        
                                    </div>
                                </div>

                                <div className="section-row-two">
                                <div className="e-money-details">
                                        <div>
                                            <label htmlFor="e-money number">e-Money Number</label>
                                            <input type="number" placeholder="238521993" id="country"/>
                                        </div>
                                        <div>
                                            <label htmlFor="e-money number">e-Money PIN</label>
                                            <input type="number" placeholder="6891" id="country"/>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </section>
                    </form>
                </div>
                <div className="summary">
                    <div className="">
                        <div className="total-cost">
                            <p class="price-details">total</p>
                            <p class="cost">$5, 396</p>
                        </div>
                        <div className="total-cost">
                            <p class="price-details">shipping</p>
                            <p class="cost">$50</p>
                        </div>
                        <div className="total-cost">
                            <p class="price-details">vat (included)</p>
                            <p class="cost">$1, 079</p>
                        </div>
                        <div className="total-cost all-cost">
                            <p class="price-details">grand total</p>
                            <p class="grand-total">$5, 446</p>
                        </div>
                    </div>
                    <button 
                    className="confirmation-btn"
                    onClick={() => setModalIsOpen(true)}
                    >
                        continue and pay
                    </button>
                </div>
            </div>

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

                    </div>
                    <Link to='/'>
                        <button className="back-home">back to home</button>
                    </Link>
                </div>
                
            </Modal>    
        </div>

        
    )
}

export default Checkout;