import { useContext } from "react";
import {CartContext} from "../context/cart"
export const CartCard= (props)=>{
    const cartContext = useContext(CartContext);
    let total =cartContext.items.reduce((a,b)=> a+b.price,0);
    // if(cartContext.items)total=cartContext.items.reduce(item,0);
    return (
        <div className="cart-card">
            <hr />
            <h2>Your Cart</h2>
            {cartContext.items.map((item)=>{return <li>{item.name} : {item.price}</li>})}
            <h5>Total Bill : ${total}</h5>
        </div>
    );
};