import React from "react";
import '../App.css';

const Button = (props) => {
    return(
        <button className="button button--cart">{props.children}</button>
    )
}

export default Button;