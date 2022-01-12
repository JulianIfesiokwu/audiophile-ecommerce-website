import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button.component";
import xx99 from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx59thumbnail from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9thumbnail from "../../assets/shared/desktop/image-zx9-speaker.jpg";

const XX99markI = () => {
    const navigate = useNavigate();

    return (

        <div className="headphones-main">
        <button onClick={() => navigate(-1)}>Go Back</button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <img src={xx99} alt="" />
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">XX99 Mark I
                    Headphones</p>
                    <p className="xx99-product-details">
                    As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. 
                    </p>
                    <p className="price">$ 1, 750</p>
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
                        <img src={xx99thumbnail} alt="xx99" />
                        <p className="link-name">xx99 mark ii</p>
                        <Link to="/headphones/XX99markII">
                        <Button>see product</Button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={xx59thumbnail} alt="" />
                        <p className="link-name">xx59</p>
                        <Link to="/headphones/XX59">
                        <Button>see product</Button>
                        </Link>
                    </div>
                    <div className="similar-link">
                        <img src={zx9thumbnail} alt="" />
                        <p className="link-name">zx9 speaker</p>
                        <Link to="/speakers/ZX9">
                        <Button>see product</Button>
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