import React from "react";
import { Link } from "react-router-dom";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import Button from "../../Components/Button/Button.component";
import zx9 from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import zx7 from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';

const SpeakersCategory = () => {
    return (
        <div className="product-section">
            <div className="headphones-landing">
                <h1 className="page-title">speakers</h1>
            </div>
            <div className="headphones-main">
                <div className="headphones-row-one">
                    <div className="img-container">
                        <img src={zx9} alt="" />
                    </div>
                    <div className="about-xx99">
                        <h2 className="xx99-intro">new product</h2>
                        <p className="xx99-product-name">ZX9 SPEAKER</p>
                        <p className="xx99-product-details">
                        Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <Link to="/speakers/ZX9">
                        <Button>see product</Button>
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
                            <Button>see product</Button>
                        </Link>
                        
                    </div>
                    <div className="img-container">
                        <img src={zx7} alt="" />
                    </div>
                </div>

                <ProductCategory />

                <AudioGear />

            </div>
        </div>
    )
}

export default SpeakersCategory;