import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ZX7Desktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import ZX7Tablet from "../../assets/product-zx7-speaker/tablet/image-product.jpg";
import ZX7Mobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

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

const ZX7 = (props) => {
    const { Speakers: { ZX7 } } = shopProducts
    const { onAdd } = props

    const initialCount = 1
    const [ count, setCount ] = useState(initialCount)
    const navigate = useNavigate()

    return (

        <div className="headphones-main">
        <button 
        className="back-btn"
        onClick={() => navigate(-1)}>Go Back</button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <picture>
                        <source media="(min-width:799px)" srcSet={ZX7Desktop}></source>
                        <source media="(min-width:481px)" srcSet={ZX7Tablet}></source>
                        <img src={ZX7Mobile} alt="" />
                    </picture>
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">ZX7 speaker</p>
                    <p className="xx99-product-details">
                    Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                    </p>
                    <p className="price">$ 3, 500</p>
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
                        onClick={() => onAdd(ZX7)}
                        className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>
                    <p className="features-text">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                    </p>
                    <p className="features-text">
                    The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
                    </p>
                </div>

                <div className="box-contents">
                    <p className="box-contents-title">in the box</p>
                    <p className="product-accessories">
                        <span className="quantity">2x</span>
                        Speaker Unit
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">2x</span>
                        Speaker Cloth Panel
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        User Manual
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        3.5mm 7mm Audio Cable
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        7.5m Optical Cable
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
                            <source media="(min-width:799px)" srcSet={zx9thumbnailDesktop}></source>
                            <source media="(min-width:481px)" srcSet={zx9thumbnailTablet}></source>
                            <img src={zx9thumbnailMobile} alt="" />
                        </picture>
                        <p className="link-name">zx9 speaker</p>
                        <Link to="/speakers/ZX9">
                        <button className="see-product-btn">see product</button>
                        </Link>
                    </div>
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
                        </picture>
                        <p className="link-name">xx59</p>
                        <Link to="/headphones/XX59">
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

export default ZX7;