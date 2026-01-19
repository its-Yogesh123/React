import React,{useState,useEffect} from "react";

const Timer = ()=>{
    const [time,setTime] = useState(0);
    // useEffect(()=>{
    //     const timer=setTimeout(()=>{
    //         setTime(time+1);
    //     },1000);
    // },[time]);

    // using setInterval
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(time+1);
        },1000);
        return ()=>{
            clearInterval(timer);
        };
    },[time]);
    return (
        <div>
            <h1>Timer </h1>
            <p>Current Time : {time}</p>
        </div>
    )
};

export default Timer;