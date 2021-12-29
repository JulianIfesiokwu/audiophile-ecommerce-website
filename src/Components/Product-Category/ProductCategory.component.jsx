import React from "react";
import ProductLink from "../ProductLink/ProductLink.component";

import './ProductCategory.styles.css';
import headPhonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakerImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const ProductCategory = () => {
    return (
        <div className="product-category">
            <ProductLink title="Headphones" linkImage={headPhonesImage} />
            <ProductLink title="Speakers" linkImage={speakerImage} />
            <ProductLink title="Earphones" linkImage={earphonesImage} />
        </div>
    )
}

export default ProductCategory;