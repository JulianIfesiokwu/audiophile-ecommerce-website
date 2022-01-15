import React from "react";

import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';

import './ProductLink.styles.css'

const ProductLink = (props) => {
    return (
        <div className="product-link">
            <div>
                <img className="link-image" src={props.linkImage} alt="link"/>
            </div>            
            <p className="product-title">{props.title}</p>
            <p className="shop-link">
                shop
                <img src={arrowRight} alt=""/>
            </p>
        </div>
    )
}

export default ProductLink;