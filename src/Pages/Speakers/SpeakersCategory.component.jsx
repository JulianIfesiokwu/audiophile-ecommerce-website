import React from "react";
import { Link } from "react-router-dom";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";

import zx9Mobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg';
import zx9Tablet from '../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import zx9Desktop from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import zx7Mobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg';
import zx7Tablet from '../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import zx7Desktop from '../../assets/product-zx7-speaker/desktop/image-product.jpg';

const SpeakersCategory = () => {
    return (
        <div className="product-section">
            <div className="headphones-landing">
                <h1 className="page-title">speakers</h1>
            </div>
            <div className="headphones-main">
                <div className="headphones-row-one">
                    <div className="img-container">
                        <picture>
                            <source media="(min-width:800px)" srcSet={zx9Desktop}></source>
                            <source media="(min-width:481px)" srcSet={zx9Tablet}></source>
                            <img src={zx9Mobile} alt="" />
                        </picture>
                    </div>
                    <div className="about-xx99">
                        <h2 className="xx99-intro">new product</h2>
                        <p className="xx99-product-name">ZX9 SPEAKER</p>
                        <p className="xx99-product-details">
                        Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <Link to="/speakers/ZX9">
                        <button className="product-btn">see product</button>
                        </Link>
                        
                    </div>
                </div>

                <div className="headphones-row-two">
                    <div className="about-xx99">
                        <p className="xx99m1-product-name">ZX7 SPEAKER</p>
                        <p className="xx99m1-product-details">
                        Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                        </p>
                        <Link to="/speakers/ZX7">
                            <button className="product-btn">see product</button>
                        </Link>
                        
                    </div>
                    <div className="img-container">
                        <picture>
                            <source media="(min-width:800px)" srcSet={zx7Desktop}></source>
                            <source media="(min-width:481px)" srcSet={zx7Tablet}></source>
                        <img src={zx7Mobile} alt="" />
                        </picture>
                    </div>
                </div>

                <ProductCategory />

                <AudioGear />

            </div>
        </div>
    )
}

export default SpeakersCategory;