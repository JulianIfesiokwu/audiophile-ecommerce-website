import React from "react";
import NavList from '../NavList/Navlist.component';
import logo from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';

import './Footer.styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row-one">
                <img className="logo" src={logo} alt="logo" />
                <NavList />
            </div>
            <div className="row-two">
                <p className="audiophile-footer-text">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <div className="social_media">
                    <Facebook className="icon"/>
                    <Twitter className="icon"/>
                    <Instagram />
                </div>

            </div>
            <div className="row-three">
                <p className="copyright">Copyright 2021. All Rights Reserved</p>
            </div>

            

        </div>
    )
}

export default Footer;