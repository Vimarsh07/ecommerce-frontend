import React, {useContext} from "react";
import './CartDisplay.css';
import {ProductContext} from "../../Context/ProductContext";
import remove from "../../Components/Assets/cart_cross_icon.png";

const CartDisplay = () => {
    const {getTotalCart,all_product,cartItems,removeFromCart} = useContext(ProductContext);
    return(

        <div className="cart-display">
            <div className="cart-item-mainformat">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if(cartItems[e.id] > 0){
                    return <div>
                    <div className="cart-item-format cart-item-mainformat">
                        <img src ={e.image} alt ="" className="cart-product-icon"/>
                        <p>{e.name}</p>
                        <p>${e.unit_price}</p>
                        <button className="item-quantity">{cartItems[e.id]}</button>
                        <p>{e.unit_price*cartItems[e.id]}</p>
                        <img className="remove-icon"  src ={remove} onClick={() =>{removeFromCart(e.id)}} alt ="" />
                    </div>
                    <hr/>
                </div>
                }
                return null;

            })}
            <div className="cart-total">
                <div className="cart-total-items">
                    <h1>Cart Total</h1>
                    <div >
                        <div className="cart-item-total-format">
                            <p>Subtotal</p>
                            <p>${getTotalCart()}</p>
                        </div>
                        <hr/>
                        <div className="cart-item-total-format" >
                            <p>Shipping Charges</p>
                        </div>
                        <div className="cart-item-total-format" >
                            <p>Delivery Charges</p>
                        </div>
                        <hr/>
                        <div className="cart-item-total-format">
                            <h3>Total</h3>
                            <p>${getTotalCart()}</p>
                        </div>
                    </div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
            
        
        </div>
    )

}



export default CartDisplay;