import React, { useEffect, useState } from "react";
import Square from "./square";
const Board = ()=>{
    const [state,setState] = useState(Array(9).fill(null))
    const [turn,setTurn] = useState(true);
    const handleClick = (idx)=>{
        const copyState = [...state];
        if(copyState[idx] === null){
            copyState[idx] = turn?"O":"X";
            setTurn(!turn);
            setState(copyState)
        }
    };
    const reset= ()=>{
        setState(Array(9).fill(null));
    };
    const Winner= ()=>{
        for(let i=0;i<3;i++){
            if(state[i*3 + 0] && 
                state[i*3 + 0] === state[i*3 + 1] && state[i*3 + 1] === state[i*3 + 2]){
                return true;
            }
        }
        for(let i=0;i<3;i++){
            if(state[0*3 + i] && 
                state[0*3 + i] === state[1*3 + i] && state[1*3 + i] === state[2*3 + i]){
                return true;
            }
        }
        if(state[0]
            && state[0] === state[4] && state[4] === state[8]){
             return true;
        }
        else if(state[6] && 
            state[6] === state[4] && state[4] === state[2]){
            return true;
        }
        return false;
    }
    return (
        <div>
            {Winner()?(<h1> {turn?"X":"O"} Wins the Game</h1>):
            <div className="board">
                <div className="board-row">
                    <Square 
                        fun = {()=>handleClick(0)}
                        value ={state[0]} />
                    <Square 
                        fun = {()=>handleClick(1)}
                        value ={state[1]} />
                    <Square 
                        fun = {()=>handleClick(2)}
                        value ={state[2]} />
                </div>
                <div className="board-row">
                    <Square 
                        fun = {()=>handleClick(3)}
                        value ={state[3]} />
                    <Square 
                        fun = {()=>handleClick(4)}
                        value ={state[4]} />
                    <Square 
                        fun = {()=>handleClick(5)}
                        value ={state[5]} />

                </div>
                <div className="board-row">
                    <Square 
                        fun = {()=>handleClick(6)}
                        value ={state[6]} />
                    <Square 
                        fun = {()=>handleClick(7)}
                        value ={state[7]} />
                    <Square 
                        fun = {()=>handleClick(8)}
                        value ={state[8]} />
                </div>
            </div>
            }
            <button onClick={()=>{reset()}}>Reset</button>
        </div>
    )
};

export default Board;