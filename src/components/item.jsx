import React from "react";

// const Item = ()=>{
//     return (
//         <li className="todo_item">
//            <span>
//              <input type="checkbox" name="" id="" />
//              { <span className="todo_item_text">Item 0</span> }
//            </span>
//            <p>...</p>
//         </li>
//     );
// };

// with  props
const Item = (props)=>{
    return (
        <li className="todo_item">
           <span>
             {props.completed ?<></>:<input type="checkbox" name="" id="" />}
             <span className="todo_item_text">{props.text}</span>
           </span>
           <p>...</p>
        </li>
    );
};


export default Item;