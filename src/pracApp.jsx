import { useState } from "react";
import {Li} from "./components/list"
//  const PracApp = ()=>{
//     const [count,setCount] = useState(0);
//     return (
//         <div>
//             {/*count%2 ===0 ?<Li key="1" name="even"/>:<Li key="2" name="odd"/>*/} 
//             {count%2 ===0 ?<Li name="even"/>:<Li name="odd"/>}
//             <button onClick={()=>{setCount(count+1)}}>click</button>
//         </div>
//     );
// };

// in case of list
 const PracApp = ()=>{
   const [x,setX] = useState([]);
   let c=0;
    return (
        <div>
            {x.map((e,idx) => <Li key={x.length -(c++)} name={e}/>)}
            <button onClick={()=>{setX([x.length+1,...x])}}>Add</button>
        </div>
    );
};


export default PracApp;