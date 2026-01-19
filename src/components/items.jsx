import React, { useContext } from "react";
import {CartContext} from "../context/cart"
export const ItemCard = (props)=>{
    const cart = useContext(CartContext);
    return (
        <div className="item-card">
            <h3> {props.name}</h3>
            <p>${props.price}</p>
            <button onClick={()=>{
                cart.setItems([...cart.items,{name:props.name,price:props.price}]);
            }}>Add to Cart</button>
        </div>
    );
};