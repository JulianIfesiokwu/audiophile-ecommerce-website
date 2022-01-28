import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import YX1Mobile from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import YX1Tablet from "../../assets/product-yx1-earphones/tablet/image-product.jpg";
import YX1Desktop from "../../assets/product-yx1-earphones/desktop/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

import xx991thumbnailDesktop from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import xx991thumbnailTablet from '../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import xx991thumbnailMobile from '../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';

import xx59thumbnailDesktop from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import xx59thumbnailTablet from "../../assets/shared/tablet/image-xx59-headphones.jpg";
import xx59thumbnailMobile from "../../assets/shared/mobile/image-xx59-headphones.jpg";

import zx9thumbnailDesktop from "../../assets/shared/desktop/image-zx9-speaker.jpg";
import zx9thumbnailTablet from "../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9thumbnailMobile from "../../assets/shared/mobile/image-zx9-speaker.jpg";

import shopProducts from "../../data";

const YX1 = (props) => {
    const { Earphones: { YX1 } } = shopProducts
    const { onAdd } = props

    const initialCount = 1
    const [ count, setCount ] = useState(initialCount)
    const navigate = useNavigate();

    return (

        <div className="headphones-main">
        <button 
        className="back-btn"
        onClick={() => navigate(-1)}>Go Back</button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <picture>
                        <source media="(min-width:800px)" srcSet={YX1Desktop}></source>
                        <source media="(min-width:481px)" srcSet={YX1Tablet}></source>
                        <img src={YX1Mobile} alt="" />
                    </picture>
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">YX1 WIRELESS EARPHONES</p>
                    <p className="xx99-product-details">
                    Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <p className="price">$ 599</p>
                    <div className="add-product">
                    <div className="product-quantity">
                            <button 
                            onClick={() => setCount((prevCount) => prevCount -1)}
                            className="reduce">-</button>
                            <button className="number">{count}</button>
                            <button 
                            onClick={() =>setCount((prevCount) => prevCount + 1)}
                            className="increase">+</button>
                        </div>
                        <button 
                        onClick={() => onAdd(YX1)}
                        className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>
                    <p className="features-text">Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                    </p>
                    <p className="features-text">
                    The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
                    </p>
                </div>

                <div className="box-contents">
                    <p className="box-contents-title">in the box</p>
                    <p className="product-accessories">
                        <span className="quantity">2x</span>
                        Earphone Unit
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">6x</span>
                        Multi-size Earplugs
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        User Manual
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        USB-C Charging Cable
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        Travel Pouch
                    </p>
                </div>
            </div>

            <div className="image-grid">
                <div className="image-one">
                    <img src={imageOne} alt="microphone" />
                </div>
                <div className="image-two">
                    <img src={imageTwo} alt="" />
                </div>
                <div className="image-three">
                    <img src={imageThree} alt="" />
                </div>
            </div>

            <div className="similar-products">
                <p className="similiar-products-title">you may also like</p>
                <div className="similar-products-links">
                <div className="similar-link">
                    <picture>
                        <source media="(min-width:799px)" srcSet={xx991thumbnailDesktop}></source>
                        <source media="(min-width:481px)" srcSet={xx991thumbnailTablet}></source>
                        <img src={xx991thumbnailMobile} alt="" />
                    </picture>
                        <p className="link-name">xx99 mark i</p>
                        <Link to="/headphones/XX99markI">
                        <button className="see-product-btn">see product</button>
                        </Link>
                    </div>
                    <div className="similar-link">
                        <picture>
                            <source media="(min-width:799px)" srcSet={xx59thumbnailDesktop}></source>
                            <source media="(min-width:481px)" srcSet={xx59thumbnailTablet}></source>
                            <img src={xx59thumbnailMobile} alt="" />
                        </picture>                        <p className="link-name">xx59</p>
                        <Link to="/headphones/XX59">
                        <button className="see-product-btn">see product</button>
                        </Link>
                    </div>
                    <div className="similar-link">
                        <picture>
                            <source media="(min-width:799px)" srcSet={zx9thumbnailDesktop}></source>
                            <source media="(min-width:481px)" srcSet={zx9thumbnailTablet}></source>
                            <img src={zx9thumbnailMobile} alt="" />
                        </picture>
                        <p className="link-name">zx9 speaker</p>
                        <Link to="/speakers/ZX9">
                        <button className="see-product-btn">see product</button>
                        </Link>
                    </div>
                </div>
            </div>

            <ProductCategory />
            <AudioGear />

        </div>

    )
}

export default YX1;