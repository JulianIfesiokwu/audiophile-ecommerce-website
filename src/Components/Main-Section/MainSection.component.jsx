import React from "react";
import ProductCategory from "../Product-Category/ProductCategory.component";
import PremiumProducts from "../PremiumProducts/PremiumProducts.component";
import AudioGear from "../Audio-Gear/AudioGear.component";

import './MainSection.styles.css';

const MainSection = () => {
    return (
        <div className="main-section">
            <ProductCategory />
            <PremiumProducts />
            <AudioGear />
            
        </div>
    )
}

export default MainSection;