import React,{useEffect, useState} from "react";

const Counter0 =()=>{
    const [val,setCount] = useState(0);
    // during mounting
    useEffect(()=>{
        console.log("Counter0 is Mounting...");

        return function(){
            console.log("Counter0 is Un-mounting...");
        };
    },[]);

    // during update

    useEffect(()=>{
        console.log("Counter0 is Updating...");

        return function(){  // execute on update or unmount
            console.log("Older Counter0 is removing..."); 
        };
    },[val]);

    // -
    return (
        <div>
            <h1>Counter is {val}</h1>
            <button onClick={()=>{setCount(val+1)}}>Update</button>
        </div>
    );
};

export default Counter0;