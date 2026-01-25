import {ProductCard} from "./components/product"
import {CartCard} from './components/cart1'
import 'bootstrap/dist/css/bootstrap.min.css';
const products = require("./products.json");
export const ReduxApp=()=>{
    return (
        <div>
            <CartCard/>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            
            {products.map(e=> <ProductCard {...e}/>)}
            </div>
        </div>
    );
};