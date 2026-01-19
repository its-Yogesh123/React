import React from "react";

const Square = (props)=>{
    return (
        <div 
        onClick={props.fun}
        style={{
            border:"1px solid",
            width:"100%",
            height:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

        }}
        className="square">
            <h1>{props.value}</h1>
        </div>
    );
};
export default Square;