import React from "react";
import { Link } from "react-router-dom";
import YX1Mobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
import YX1Tablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import YX1Desktop from '../../assets/home/desktop/image-earphones-yx1.jpg';
import zx9Mobile from '../../assets/home/mobile/image-speaker-zx9.png';
import zx9Tablet from '../../assets/home/tablet/image-speaker-zx9.png';
import zx9Desktop from '../../assets/home/desktop/image-speaker-zx9.png';

import './PremiumProducts.styles.css';

const PremiumProducts = () => {
    return (
        <div className="premium-products">
            <div className="zx9-speaker">
                <div className="large-image">
                    <source media="(min-width:800px)" srcSet={zx9Desktop}></source>
                    <source media="(min-width:481px)" srcSet={zx9Tablet}></source>
                    <img src={zx9Mobile} alt="speaker" />
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
                    <picture>
                        <source media="(min-width:800px)" srcSet={YX1Desktop}></source>
                        <source media="(min-width:481px)" srcSet={YX1Tablet}></source>
                        <img src={YX1Mobile} alt=""/>
                    </picture>
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