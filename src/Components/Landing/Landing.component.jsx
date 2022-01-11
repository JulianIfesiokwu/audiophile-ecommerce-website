import React from "react";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";

import './Landing.styles.css';

const Landing = () => {
    return (
        <div className="landing">
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
                    <Link to="/headphones/XX99markII">
                        <Button className="landing-button">SEE PRODUCT</Button>
                    </Link>
                    
                </div>
            </div>

        </div>

    )
}

export default Landing;