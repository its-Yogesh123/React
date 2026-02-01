import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
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
//  const PracApp = ()=>{
//    const [x,setX] = useState([]);
//    let c=0;
//     return (
//         <div>
//             {x.map((e,idx) => <Li key={x.length -(c++)} name={e}/>)}
//             <button onClick={()=>{setX([x.length+1,...x])}}>Add</button>
//         </div>
//     );
// };



// stall state problem. 🔴 Most Important 🔴
// const PracApp = ()=>{
//     const [count ,setCount] = useState(0);
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(x => x+1);       
//             console.log(count);   // still count same 0 but onscreen counter work fine why
//         },1000);
//         return ()=>{clearInterval(interval)};
//     },[]);
//     return (
//         <h1>Count is {count}</h1>
//     );
// }

/** Due to Closures (surrounding memory)
 * Because when interval is set is takes snap of states i.e count =0 now on every run count is 0
 * that is why console showinf 0 everytime but due to functional change setCount(x =>x+1) 
 * everythime this intervavl run it push this function into queue
 * // whenever state chnage component re-renders so screen update but useEffect(...,[]) this is not
 * ecexuting on every render (if it was then console also update everytime)
 * 🟢 But if you put count in dependency array then useEffect() execute also everytime and now setInterval will capture eveyrtime
 * fresh/updated value
 */
// stall state problem
// const PracApp = ()=>{
//     const [count ,setCount] = useState(0);
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(x => x+1);
//             console.log(count);
//         },1000);
//         return ()=>{clearInterval(interval)};
//     },[]);
//     return (
//         <h1>Count is {count}</h1>
//     );
// };

//  Solution of  🟢 Stall State 🟢
// 1 using dependecy 
// const PracApp = ()=>{
//     const [count ,setCount] = useState(0);
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(x => x+1);
//             console.log(count);
//         },1000);
//         return ()=>{clearInterval(interval)};
//     },[count]);     // put that variable here
//     return (
//         <h1>Count is {count}</h1>
//     );
// };
// ❌ function is callling every time setInterval setting - clearing 

// 2. functional changes (best for counter)
// const PracApp = ()=>{
//     const [count ,setCount] = useState(0);
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(x => x+1);
//         },1000);
//         return ()=>{clearInterval(interval)};
//     },[]);     // put that variable here
//     return (
//         <h1>Count is {count}</h1>
//     );
// };

// 3 using useRef
// const PracApp = ()=>{
//     const [count ,setCount] = useState(0);
//     const counter = useRef(count);
//     counter.current = count;
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setCount(counter.current+1)
//             console.log(count);
//             console.log(counter.current);
//         },1000);
//         return ()=>{clearInterval(interval)};
//     },[]);     // put that variable here
//     return (
//         <h1>Count is {counter.current}</h1>
//     );
// };


/**  ********************* useMemo() ******************* */

// const PracApp = ()=>{
//     const [count,setCount] = useState(0);
//     const data = {'name':"Yogesh Kumar"}
//     const data2 = useMemo(()=> {return {'name':"Yogesh"}},[]);  // not creating everytime
//     useEffect(()=>{
//         console.log(count);
//     },[count]);
//     useEffect(()=>{
//         console.log("Data is changed", data.name);
//     },[data]);
//     useEffect(()=>{
//         console.log("Data2 is changed", data2.name);
//     },[data2]);
//     return (
//         <div>
//             <h1>Hello</h1>
//             <button onClick={()=>{setCount(count+1)}}>Click me</button>
//         </div>
//     );
// };
// const PracApp = ()=>{
//     const [count,setCount] = useState(0);
//     return (
//         <div>
//             <h1>Hello</h1>
//             <button onClick={()=>{setCount(count+1)}}>Click me</button>
//         </div>
//     );
// };



/**  ********************* React.memo ******************* */

// const Child = ({count})=>{
//     console.log("Child Component re-render",count);
//     return <h1>Counter : {count}</h1>
// };

// const PracApp = ()=>{
//     const [count,setCount] = useState(0);
//     const [text,setText] = useState("");
//     return (
//         <div>
//             <button onClick={()=>{setCount(count+1)}}>Incriment</button>
//             <input type="text"
//             onChange={e =>{setText(e.target.value)}} />
//             <Child count={count}/>
//         </div>
//     );
// };



// solution React.memo
// const Child = React.memo(({count})=>{
//     console.log("Child Re-render");
//     return <h1>Counter : {count}</h1>
// });

// const PracApp = ()=>{
//     const [count,setCount] = useState(0);
//     const [text,setText] = useState("");
//     return (
//         <div>
//             <button onClick={()=>{setCount(count+1)}}>Incriment</button>
//             <input type="text"
//             onChange={e =>{setText(e.target.value)}} />
//             <Child count={count}/>
//         </div>
//     );
// };




// ------- 

export default PracApp;


