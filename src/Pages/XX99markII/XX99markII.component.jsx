import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import xx99 from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59thumbnail from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9thumbnail from "../../assets/shared/desktop/image-zx9-speaker.jpg";

import shopProducts from "../../data";

import "./XX99markII.styles.css";

const XX99markII = (props) => {
    const { Headphones: { XX99MarkII } } = shopProducts
    const { onAdd, onRemove } = props

    const initialCount = 1
    const [ count, setCount ] = useState(initialCount)
    const navigate = useNavigate()

    return (

        <div className="headphones-main">
            <button 
            className="back-btn"
            onClick={() => navigate(-1)}>
            Go Back
            </button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <img src={xx99} alt="" />
                </div>
                <div className="about-xx99">
                    <h2 className="xx99-intro">new product</h2>
                    <p className="xx99-product-name">{XX99MarkII.name} Headphones</p>
                    <p className="xx99-product-details">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </p>
                    <p className="price">$ {XX99MarkII.price}</p>
                    <div className="add-product">
                    <div className="product-quantity">
                        <button 
                        onClick={() => {
                            setCount((prevCount) => prevCount -1)
                            onRemove(XX99MarkII)
                            }
                        }
                        className="reduce">-</button>
                        <button className="number">{count}</button>
                        <button 
                        onClick={() =>setCount((prevCount) => prevCount + 1)}
                        className="increase">+</button>
                    </div>
                    <button 
                    onClick={() =>  onAdd(XX99MarkII)}
                    className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>

                    <p className="features-text">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                    </p>

                    <p className="features-text">
                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
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
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        Travel Bag
                    </p>
                </div>
            </div>

            <div className="image-grid">
                <div className="image-one">
                    <img src={imageOne} alt="man wearing headphones" />
                </div>
                <div className="image-two">
                    <img src={imageTwo} alt="headphones on table" />
                </div>
                <div className="image-three">
                    <img src={imageThree} alt="xx99-headphones" />
                </div>
            </div>

            <div className="similar-products">
                <p className="similiar-products-title">you may also like</p>
                <div className="similar-products-links">
                    <div className="similar-link">
                        <img src={xx99thumbnail} alt="xx99" />
                        <p className="link-name">xx99 mark i</p>
                        <Link to="/headphones/XX99markI">
                        <button className="see-product-btn">see product</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={xx59thumbnail} alt="" />
                        <p className="link-name">xx59</p>
                        <Link to="/headphones/XX59">
                        <button className="see-product-btn">see product</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={zx9thumbnail} alt="" />
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

export default XX99markII;