import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
// import { ReactComponent as orderApproved } from "../../assets/cart/Order-accepted.svg";

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
                                    <label htmlFor="name">name</label>
                                    <input type="text" placeholder="Alexei Ward" id="name"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="email">email</label>
                                    <input type="email" placeholder="alexei@mail.com" id="email"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="phone">phone number</label>
                                    <input type="number" placeholder="+1 202-555-0136" id="phone"/>
                                </div>

                            </div>
                        </section>
                        <section className="shipping-info">
                            <h2 className="section-title">shipping info</h2>
                            <div className="section-field">
                                <div className="field" id="address">
                                    <label htmlFor="name">address</label>
                                    <input type="text" placeholder="1137 Williams Avenue" id="address"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="zip code">zip code</label>
                                    <input type="number" placeholder="10001" id="zip code"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="city">city</label>
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
                                    <p className="payment-method">payment method</p>
                                    <div className="radio-fields">
                                        <input type="radio" name="payment-type"/>
                                        <label htmlFor="e-money">e-Money</label>
                                        <input type="radio" name="payment-type"/>
                                        <label htmlFor="e-money">Cash on Delivery</label>
                                    </div>
                                    <div className="e-money-details">
                                        <div>
                                            <label htmlFor="e-money number">e-Money Number</label>
                                            <input type="text" placeholder="238521993" id="country"/>
                                        </div>
                                        <div>
                                            <label htmlFor="e-money number">e-Money PIN</label>
                                            <input type="text" placeholder="6891" id="country"/>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                        </section>
                    </form>
                </div>
                <div className="summary">
                    <button onClick={() => setModalIsOpen(true)}>continue and pay</button>

                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel={"shopping-cart"}
                className="modal-body">
                <div className="order-confirmation">
                    <orderApproved />
                    <h2 className="confirmation-title">THANK YOU FOR YOUR ORDER</h2>
                    <p className="notification">You will receive an email confirmation shortly.</p>
                    <div className="order-summary"></div>
                    <Link to='/'>
                        <button>back to home</button>
                    </Link>
                </div>
                
            </Modal>    
        </div>

        
    )
}

export default Checkout;