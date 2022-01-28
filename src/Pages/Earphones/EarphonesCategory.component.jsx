import React from "react";
import { Link } from "react-router-dom";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import YX1Mobile from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import YX1Tablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Desktop from "../../assets/product-yx1-earphones/desktop/image-product.jpg";

const EarphonesCategory = () => {
    return (
      <div className="product-section">
        <div className="headphones-landing">
            <h1 className="page-title">earphones</h1>
        </div>
        <div className="headphones-main">
                <div className="headphones-row-one">
                    <div className="img-container">
                        <picture>
                        <source media="(min-width:800px)" srcSet={YX1Desktop}></source>
                        <source media="(min-width:481px)" srcSet={YX1Tablet}></source>
                        <img src={YX1Mobile} alt="" />
                        </picture>
                    </div>
                    <div className="about-xx99">
                        <h2 className="xx99-intro">new product</h2>
                        <p className="xx99-product-name">YX1 WIRELESS EARPHONES</p>
                        <p className="xx99-product-details">
                        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                        </p>
                        <Link to="/earphones/YX1">
                        <button className="product-btn">see product</button>
                        </Link>
                    </div>
                </div>

                <ProductCategory />

                <AudioGear />

            </div>
      </div>
    );
}

export default EarphonesCategory;