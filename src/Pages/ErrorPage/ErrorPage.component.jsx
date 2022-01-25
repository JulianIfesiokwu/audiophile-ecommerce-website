import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ErrorPage.styles.css";

const ErrorPage = () => {
const navigate = useNavigate(-1);

    return (
        <div className="error">
            <h3 className="error-title">
                I am sorry the page you requested does not exist
            </h3>
            <Link to="/">
                <button className="product-btn">Home</button>
                <button className="product-btn" onClick={() => navigate(-1)}>Go Back</button>
            </Link>

        </div>
    )
}

export default ErrorPage;