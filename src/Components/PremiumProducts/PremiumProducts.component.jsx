import React from "react";
import { Link } from "react-router-dom";
import earphone from '../../assets/home/desktop/image-earphones-yx1.jpg';
import zx9Speaker from '../../assets/home/desktop/image-speaker-zx9.png';

import './PremiumProducts.styles.css';

const PremiumProducts = () => {
    return (
        <div className="premium-products">
            <div className="zx9-speaker">
                <div className="large-image">
                    <img src={zx9Speaker} alt="speaker" />
                </div>
                
                <div className="zx9-details">
                    <h2 className="zx9-name">zx9 speaker</h2>
                    <p className="zx9-info">
                        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                    </p>
                    <Link to="/speakers/ZX9">
                        <button className="zx9-button">see product</button>
                    </Link>
                    
                </div>
            </div>

            <div className="zx7-speaker">
                <h2 className="zx7-name">zx7 speaker</h2>
                <Link to="/speakers/ZX7">
                    <button className="zx7-button">see product</button>
                </Link>
            </div>

            <div className="earphones">
                <div className="earphone-image">
                    <img src={earphone} alt=""/>
                </div>

                <div className="earphone-link">
                    <h2 className="yx1-name">yx1 earphones</h2>
                    <Link to="/earphones/YX1">
                        <button className="yx-1-button">see product</button>
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default PremiumProducts;