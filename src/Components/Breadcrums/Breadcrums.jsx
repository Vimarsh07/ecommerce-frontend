import React from "react";
import "./Breadcrums.css";
import barrow from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className="breadcrum">
            HOME <img src={barrow} alt=" " /> Products <img src={barrow} alt=" " /> {product.category} <img src={barrow} alt=" " /> {product.name}
        </div>
    );
};

export default Breadcrums;