import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
        <Link to={ `/products/${props.id}`}> <img src={props.image} alt=''/> </Link>
         <p>{props.name}</p>
         <div className="item-prices">
            <div className="item-price-unit">
                {"$"+props.unit_price}
            </div>
            <div className="item-price-total">
                {"$"+props.total_price}
            </div>
         </div>
        </div>
    );
    };

export default Item;