import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import ZX9Desktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import ZX9Tablet from "../../assets/product-zx9-speaker/tablet/image-product.jpg";
import ZX9Mobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import imageOne from '../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import imageTwo from '../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import imageThree from '../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

import xx99thumbnail from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59thumbnail from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import zx7thumbnail from "../../assets/shared/desktop/image-zx7-speaker.jpg";

import shopProducts from "../../data";

const ZX9 = (props) => {
    const { Speakers: { ZX9 } } = shopProducts
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
                        <source media="(min-width:799px)" srcset={ZX9Desktop}></source>
                        <source media="(min-width:481px)" srcset={ZX9Tablet}></source>
                        <img src={ZX9Mobile} alt="" />
                    </picture>
                </div>
                <div className="about-xx99">
                <h2 className="xx99-intro">new product</h2>
                    <p className="xx99-product-name">ZX9 speaker</p>
                    <p className="xx99-product-details">
                    Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                    </p>
                    <p className="price">$ 4, 500</p>
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
                        onClick={() => onAdd(ZX9)}
                        className="add-product-btn">add to cart</button>
                    </div>
                </div>
            </div>

            <div className="xx99-row-two">
                <div className="features">
                    <p className="features-title">
                        features
                    </p>
                    <p className="features-text">Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                    </p>
                    <p className="features-text">
                    Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
                    </p>
                </div>

                <div className="box-contents">
                    <p className="box-contents-title">in the box</p>
                    <p className="product-accessories">
                        <span className="quantity">2x</span>
                        Speaker Unit
                    </p>
                    <p className="product-accessories">
                        <span className="quantity">1x</span>
                        Speaker Cloth Panel
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
                        10m Optical Cable
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
                        <img src={zx7thumbnail} alt="zx7-speaker" />
                        <p className="link-name">zx7 speaker</p>
                        <Link to="/speakers/ZX7">
                        <button className="see-product-btn">see product</button>
                        </Link>
                        
                    </div>
                    <div className="similar-link">
                        <img src={xx99thumbnail} alt="" />
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
                </div>
            </div>

            <ProductCategory />
            <AudioGear />

        </div>

    )
}

export default ZX9;