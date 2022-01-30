import React from "react";
import { Link } from "react-router-dom";
import ProductLink from "../ProductLink/ProductLink.component.jsx"

import headPhonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakerImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

import './Dropdown.styles.css';

const Dropdown = (props) => {
    const { dropdown, setDropdown } = props
    return (
        <div className="dropdown-container">
            <div
            onClick={() => setDropdown(!dropdown)}>
                <Link to="/headphones">
                    <ProductLink title="Headphones" linkImage={headPhonesImage} />
                </Link>
            </div>
            <div
            onClick={() => setDropdown(!dropdown)}>
                <Link to="/speakers" >
                    <ProductLink title="Speakers" linkImage={speakerImage} />
                </Link>
            </div>
            <div
            onClick={() => setDropdown(!dropdown)}>
                <Link to="/earphones">
                    <ProductLink title="Earphones" linkImage={earphonesImage} />
                </Link>
            </div>
        </div>
    )

}

export default Dropdown;