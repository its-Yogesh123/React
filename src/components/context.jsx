import { useContext } from "react";
import { CounterContext } from "../context/counter";

export const CounterComp=()=>{

    const state = useContext(CounterContext);

    return (
        <div className="counter">
            <button onClick={()=>{state.setCount(state.count+1)}}>Incriment</button>
            <button onClick={()=>{state.setCount(state.count-1)}}>Decriment</button>
        </div>
    );
};