import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import xx99Desktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99Tablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx99Mobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

import xx99thumbnailDesktop from '../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx99thumbnailTablet from '../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import xx99thumbnailMobile from '../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg';

import xx59thumbnailDesktop from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import xx59thumbnailTablet from "../../assets/shared/tablet/image-xx59-headphones.jpg";
import xx59thumbnailMobile from "../../assets/shared/mobile/image-xx59-headphones.jpg";

import zx9thumbnailDesktop from "../../assets/shared/desktop/image-zx9-speaker.jpg";
import zx9thumbnailTablet from "../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9thumbnailMobile from "../../assets/shared/mobile/image-zx9-speaker.jpg";

import shopProducts from "../../data";

const XX99markI = (props) => {
    const { Headphones: { XX99MarkI } } = shopProducts
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
                        <source media="(min-width:799px)" srcSet={xx99Desktop}></source>
                        <source media="(min-width:481px)" srcSet={xx99Tablet}></source>
                        <img src={xx99Mobile} alt="" />
                    </picture>
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">XX99 Mark I
                    Headphones</p>
                    <p className="xx99-product-details">
                    As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. 
                    </p>
                    <p className="price">$ 1, 750</p>
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
                        onClick={() =>  onAdd(XX99MarkI)}
                        className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>
                    <p className="features-text">As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                    </p>
                    <p className="features-text">
                    From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
                    </p>
                </div>

                <div className="box-contents">
                    <p className="box-contents-title">in the box</p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        Headphone Unit
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">2x</span>
                        Replacement Earcups
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        User Manual
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        3.5mm 5mm Audio Cable
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
                            <source media="(min-width:799px)" srcSet={xx99thumbnailDesktop}></source>
                            <source media="(min-width:481px)" srcSet={xx99thumbnailTablet}></source>
                            <img src={xx99thumbnailMobile} alt="" />
                        </picture>
                        <p className="link-name">xx99 mark ii</p>
                        <Link to="/headphones/XX99markII">
                        <button className="see-product-btn">see product</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <picture>
                            <source media="(min-width:799px)" srcSet={xx59thumbnailDesktop}></source>
                            <source media="(min-width:481px)" srcSet={xx59thumbnailTablet}></source>
                            <img src={xx59thumbnailMobile} alt="" />
                        </picture>
                        <p className="link-name">xx59</p>
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
                        <button className="add-product-btn">add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>

            <ProductCategory />
            <AudioGear />

        </div>

    )
}

export default XX99markI;