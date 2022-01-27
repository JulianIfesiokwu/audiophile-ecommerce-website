import React from "react";
import audioPhoto from "../../assets/shared/desktop/image-best-gear.jpg";
import audioPhotoTablet from "../../assets/shared/tablet/image-best-gear.jpg";

import './AudioGear.styles.css';

const AudioGear = () => {
    return (
        <div className="audio-gear">
            <div className="audio-gear-information">
                <p className="audio-gear-title">
                Bringing you the <span className="highlight">best</span> audio gear
                </p>
                <p className="audio-gear-about">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="audio-gear-photo">
                <picture>
                <source media="(min-width: 481px)" srcSet={audioPhotoTablet}></source>
                <img src={audioPhoto} alt="" />
                </picture>
                
            </div>

        </div>
    )
}

export default AudioGear;