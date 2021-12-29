import React from "react";
import Navigation from "../Navigation/Navigation.component";
import Button from "../Button/Button.component";

import './Landing.styles.css';

const Landing = () => {
    return (
        <div className="landing">
            <Navigation />
            <div className="landing-section">
                <div className="landing-details">
                    <p className="product-intro">new product</p>
                    <h1 className="product-name">
                        XX99 Mark II Headphones
                    </h1>
                    <p className="product-info">
                    Experience natural, lifelike audio and exceptional               
                     build quality made for the passionate music enthusiast.
                    </p>
                    <Button className="landing-button">SEE PRODUCT</Button>
                    
                </div>
            </div>

        </div>

    )
}

export default Landing;