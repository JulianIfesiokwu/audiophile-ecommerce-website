import React from "react";
import { Link } from "react-router-dom";
import AudioGear from "../../Components/Audio-Gear/AudioGear.component";
import ProductCategory from "../../Components/Product-Category/ProductCategory.component";
import Button from "../../Components/Button/Button.component";
import xx99 from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import xx99m1 from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import xx59 from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

import './Headphones.styles.css';

const HeadphonesCategory = () => {
    return (
        <div className="product-section">
            <div className="headphones-landing">
            <h1 className="page-title">HeadPhones</h1>
            </div>
            <div className="headphones-main">
                <div className="headphones-row-one">
                    <div className="img-container">
                        <img src={xx99} alt="" />
                    </div>
                    <div className="about-xx99">
                        <h2 className="xx99-intro">new product</h2>
                        <p className="xx99-product-name">XX99 Mark II
                        Headphones</p>
                        <p className="xx99-product-details">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                        </p>
                        <Link to="/headphones/XX99markII">
                            <Button>see product</Button>
                        </Link>
                        
                    </div>
                </div>

                <div className="headphones-row-two">
                    <div className="about-xx99">
                        <p className="xx99m1-product-name">XX99 Mark I
                        Headphones
                        </p>
                        <p className="xx99m1-product-details">
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                        </p>
                        <Link to="/headphones/XX99markI">
                            <Button>see product</Button>
                        </Link>
                        
                    </div>
                    <div className="img-container">
                        <img src={xx99m1} alt="" />
                    </div>
                </div>

                <div className="headphones-row-three">
                    <div className="img-container">
                        <img src={xx59} alt="" />
                    </div>
                    <div className="about-xx59">
                        <p className="xx59-product-name">XX59
                        Headphones</p>
                        <p className="xx59-product-details">
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                        </p>
                        <Link to="/headphones/XX59">
                            <Button>see product</Button>
                        </Link>
                        
                    </div>
                </div>

                <ProductCategory />
                <AudioGear />

            </div>
            
        </div>              
    )
}

export default HeadphonesCategory;