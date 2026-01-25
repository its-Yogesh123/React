import {useSelector} from 'react-redux'
export const CartCard = ()=>{
    const items = useSelector(state => state);
    const total = items.cart.reduce((a,e)=> a+e.price,0);
    return (
        <h1>Cart Value - ${total}.00</h1>
    );
};