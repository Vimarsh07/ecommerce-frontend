import React, {createContext,useState} from "react";
import all_product from "../Components/Assets/all_product";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 1; index<all_product.length+1; index++){
        cart[index] = 0;

    }
    return cart;
}

const ProductContextProvider = ( props ) => {
    
    const [cartItems, setcartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId,quantity) => {
        setcartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + quantity }));
        
    }

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}));
    }

    const getTotalCart = () => {
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {

                let itemInfo = all_product.find((product)=>product.id === Number(item));
                total += itemInfo.unit_price * cartItems[item];
            }
            
        }
       
            return total;
        
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
            totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems,getTotalCart,all_product,cartItems,addToCart,removeFromCart};

    //console.log(cartItems);

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;
