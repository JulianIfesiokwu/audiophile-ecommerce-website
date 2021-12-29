import React from "react";

import './Button.styles.css'

const Button = (props) => {
    return (
        <button className="button">
            {props.children}
        </button>
    )

}

export default Button;