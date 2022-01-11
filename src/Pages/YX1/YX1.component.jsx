import React from "react";
import Button from "../../Components/Button/Button.component";
import YX1image from "../../assets/product-yx1-earphones/desktop/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59thumbnail from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9thumbnail from "../../assets/shared/desktop/image-zx9-speaker.jpg";

const YX1 = () => {
    return (

        <div className="headphones-main">
        <Button>go back</Button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <img src={YX1image} alt="" />
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">YX1 WIRELESS EARPHONES</p>
                    <p className="xx99-product-details">
                    Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <p className="price">$ 599</p>
                    <div className="add-product">
                        <p className="product-quantity">
                            <span className="reduce">-</span>
                            1
                            <span className="increase">+</span>
                        </p>
                        <Button>add to cart</Button>
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
                        <img src={xx99thumbnail} alt="" />
                        <p className="link-name">xx99 mark i</p>
                        <Button>see product</Button>
                    </div>
                    <div className="similar-link">
                        <img src={xx59thumbnail} alt="" />
                        <p className="link-name">xx59</p>
                        <Button>see product</Button>
                    </div>
                    <div className="similar-link">
                        <img src={zx9thumbnail} alt="zx7-speaker" />
                        <p className="link-name">zx9 speaker</p>
                        <Button>see product</Button>
                    </div>
                </div>
            </div>

            <ProductCategory />
            <AudioGear />

        </div>

    )
}

export default YX1;