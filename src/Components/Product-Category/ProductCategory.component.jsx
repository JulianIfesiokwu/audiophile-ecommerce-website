import React from "react";
import ProductLink from "../ProductLink/ProductLink.component";
import { Link } from "react-router-dom";

import './ProductCategory.styles.css';

import headPhonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakerImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const ProductCategory = () => {
    return (
        <div className="product-category">
            <Link to="/headphones"
            style={{ textDecoration: 'none' }}
            >
                <ProductLink title="Headphones" linkImage={headPhonesImage} />
            </Link>
            <Link to="/speakers"
            style={{ textDecoration: 'none' }}
            >
                <ProductLink title="Speakers" linkImage={speakerImage} />
            </Link>
            <Link to="/earphones"
            style={{ textDecoration: 'none' }}
            >
                <ProductLink title="Earphones" linkImage={earphonesImage} />
            </Link>
        </div>
    )
}

export default ProductCategory;