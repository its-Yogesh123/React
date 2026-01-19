import React,{useState} from "react";



const Counter = ()=>{
    const [val,setCount] = useState(0);
    return (
        <div>
            <p> Value is {val} : {val%2==0 ?"Even":"Odd"}</p>
            <button onClick={()=>{setCount(val+1)}}> Incriment</button>
            <button onClick={()=>{setCount(val-1)}}> Decriment</button>
        </div>
    );
};


export default Counter;