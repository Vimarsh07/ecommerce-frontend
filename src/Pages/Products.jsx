import React, {useContext} from "react";
import { ProductContext } from '../Context/ProductContext';
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from '../Components/ProductDisplay/Productdisplay';

const Products = () => {
    const {all_product} = useContext(ProductContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
            <Breadcrums product = {product}/>
            <ProductDisplay product={product} />
        
        </div>
    );
    };


export default Products;