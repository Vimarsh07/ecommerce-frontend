import React, {useContext, useState} from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_icon_dull from '../Assets/star_dull_icon.png'
import {ProductContext} from "../../Context/ProductContext";

const Productdisplay = (props) => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
    };


    const {product} = props;
    const {addToCart} = useContext(ProductContext);


    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="productdisplay-img">
                    <img className="display-main-img" src = {product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="display-right-star">
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon}alt="" />
                    <img src = {star_icon_dull} alt="" />
                    <p>(100)</p>
                </div>
                <div className="display-right-price">
                    <div className="display-right-price-unit"> Unit Price: ${product.unit_price}</div>
                    <div className="display-right-price-total"> Total Price: ${product.total_price}</div>
                </div>
                <div className="display-right-quantity">
                    <p>Quantity</p>
                    <div className="display-right-quantity-box">
                        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id,quantity)}}>Add to Cart</button>
                <p className="display-right-category"><span>Category: {product.category} </span></p>
                                  


            </div>
                
            
        </div>
    )
}

export default Productdisplay;
