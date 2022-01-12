import React from "react";
import { useNavigate } from "react-router-dom";

import "./Checkout.styles.css";
const Checkout =  () => {
    const navigate = useNavigate();

    return (

        <div className="checkout">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="checkout-information">
                <div className="billing-details">
                    <h2 className="billing-title">checkout</h2>
                    <form>
                        <section className="personal-info">
                            
                        </section>
                    </form>
                </div>
                <div className="summary"></div>
            </div>
        </div>
    )
}

export default Checkout;