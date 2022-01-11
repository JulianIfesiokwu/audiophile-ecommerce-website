import React from "react";
import { Link } from "react-router-dom";
import Button from '../Button/Button.component';
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
                        <Button className="zx9-button">see product</Button>
                    </Link>
                    
                </div>
            </div>

            <div className="zx7-speaker">
                <h2 className="zx7-name">zx7 speaker</h2>
                <Button>see product</Button>
            </div>

            <div className="earphones">
                <div className="earphone-image">
                    <img src={earphone} alt=""/>
                </div>

                <div className="earphone-link">
                    <h2 className="yx1-name">yx1 earphones</h2>
                    <Button>see product</Button>
                </div>
            </div>


        </div>

    )
}

export default PremiumProducts;