import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button.component";
import ZX7image from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59thumbnail from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9thumbnail from "../../assets/shared/desktop/image-zx9-speaker.jpg";

const ZX7 = () => {
    const navigate = useNavigate()

    return (

        <div className="headphones-main">
        <button onClick={() => navigate(-1)}>Go Back</button>

            <div className="headphones-row-one">
                <div className="img-container">
                    <img src={ZX7image} alt="" />
                </div>
                <div className="about-xx99">
                    <p className="xx99-product-name">ZX7 speaker</p>
                    <p className="xx99-product-details">
                    Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                    </p>
                    <p className="price">$ 3, 500</p>
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
                        <img src={zx9thumbnail} alt="zx7-speaker" />
                        <p className="link-name">zx9 speaker</p>
                        <Link to="/speakers/ZX9">
                        <Button>see product</Button>
                        </Link>
                    </div>
                    <div className="similar-link">
                        <img src={xx99thumbnail} alt="" />
                        <p className="link-name">xx99 mark i</p>
                        <Link to="/headphones/XX99markI">
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
                </div>
            </div>

            <ProductCategory />
            <AudioGear />

        </div>

    )
}

export default ZX7;