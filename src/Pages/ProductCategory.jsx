import React, {useContext} from "react";
import "../Pages/CSS/ProductCategory.css";
import {ProductContext} from "../Context/ProductContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item";

const ProductCategory = (props) => {
    const {all_product} = useContext(ProductContext);
    return (
        <div className="product-category">
            <div className="productcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 20 products
                </p>
                <div className="productcategory-sort">
                    Sort by:<img src= {dropdown_icon} alt=" " />                
                </div>
            </div>
            <h1 className="category">{props.category}</h1>
        <div className="productcategory-products">
            {all_product.map((item,i) => {
                if(props.category===item.category){
                return <Item  key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                unit_price={item.unit_price}
                total_price={item.total_price}/>
            }
            else {
                return null;
            }
            })}
        </div>
        <div className="productcategory-loadmore">
            Explore more 
        </div>

        </div>
    );
}

export default ProductCategory;