import React from "react";
import { Link, useNavigate } from "react-router-dom";

import xx59 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx991thumbnail from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import zx9thumbnail from "../../assets/shared/desktop/image-zx9-speaker.jpg";

const XX59 = () => {

    const navigate = useNavigate();
    return (

        <div className="headphones-main">
        <button 
        className="back-btn"
        onClick={() => navigate(-1)}>Go Back</button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <img src={xx59} alt="" />
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">XX59</p>
                    <p className="xx99-product-details">
                    Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. 
                    </p>
                    <p className="price">$ 899</p>
                    <div className="add-product">
                        <div className="product-quantity">
                            <p className="reduce">-</p>
                            <p className="number">1</p>
                            <p className="increase">+</p>
                        </div>
                        <button className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>
                    <p className="features-text">These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                    </p>
                    <p className="features-text">
                    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
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
                    <img src={imageOne} alt="girl listening to music" />
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
                        <img src={xx99thumbnail} alt="xx99" />
                        <p className="link-name">xx99 mark ii</p>
                        <Link to="/headphones/XX99markII">
                        <button className="add-product-btn">add to cart</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={xx991thumbnail} alt="" />
                        <p className="link-name">xx99 mark i</p>
                        <Link to="/headphones/XX99markI">
                        <button className="add-product-btn">add to cart</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={zx9thumbnail} alt="" />
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

export default XX59;