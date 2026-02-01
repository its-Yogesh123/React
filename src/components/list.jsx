import { useEffect, useState } from "react";

// export const  Li = ({name})=>{
//     const [st,setName] = useState(name);
//     useEffect(()=>{
//         console.log("Stae Changed");
//     },[st]);
//     useEffect(()=>{
//         if(name == "even"){
//             setName("even");
//         }
//         console.log(name," Li Mounted",st);
//         return ()=>{
//             console.log(name," Li unmounted");
//         };
//     },[]);
//     // if(name === "even"){
//     //     setName("even");
//     // }
//     return (
//       <h1>{name} Hello {st}</h1>
//     );
// };


// in case of list 
// export const  Li = ({name})=>{
//     const [id,setId] = useState(name);
//     useEffect(()=>{
//         console.log(name,"Mounted");
//         return ()=>{
//             console.log(name,"Unmounted");
//         };
//     },[]);
//     return (
//         <h1>{name} Li {id}</h1>
//     );
// };





