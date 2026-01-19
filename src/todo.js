import React, { useEffect, useState } from "react";
import Header from "./components/header"
import Item from "./components/item"
import Button from "./components/button"
import Counter from "./components/counterComponent"
import Counter0 from "./components/hooks";
import Timer from "./components/time";
import Board from "./tic-tac-toe/board";
import getPosts from "./api/index";
import PostCard from "./components/postCard";
import UserCard from "./components/userCard";
import { getUser } from "./api/index2";
import { CounterComp } from "./components/context";
import { CounterContext } from "./context/counter";
import { useContext } from "react";
import { ItemCard } from "./components/items";
import { CartCard } from "./components/cart";

// import './style.css'
import './api.css'
// const App = ()=>{
//     return (
//         <div className="todo_container">
//             <Header></Header>
//             <Counter></Counter>
//             <Item text="DS & Algorightm"></Item>
//             <Item text="C++"></Item>
//             <Item text="Development"></Item>
//             <Item completed ={1} text="Play"></Item>
//             <Item text="Play Cricket"></Item>
//             <Button></Button>
//         </div>
//     )
// };

// hooks
// const App = ()=>{

//     const [isVisible,setVisiblity] = useState(true);
//     useEffect(()=>{
//         console.log("App is Mounting...");
//         return function(){
//             console.log("App is Un-mouinting...");
//         };
//     },[]);

//     return (
//         <div className="todo_container">
//             {isVisible?<Counter0></Counter0>:<></>}
//             <button onClick={()=>{setVisiblity(!isVisible)}}>Toggle</button>
//         </div>
//     )
// };



// timer

// const App = ()=>{
//     return (
//         <div className="todo_container">
//             <Timer></Timer>
//         </div>
//     )
// };


// tic-tac-toe

// const App = ()=>{
//     return (
//         <div className="container">
//             <Board />
//         </div>
//     )
// };

// -- API application

// const App = ()=>{
//     const [posts,setPosts] = useState(null);
//     useEffect(()=>{
//         getPosts().then(posts=> {setPosts(posts)})
//         .catch(()=>{console.log("Error in getting Posts");});
//     },[]);
//     return posts?(
//         posts.map((post)=> <PostCard title={post.title}
//         body ={post.body}
//         />)
//     ):<h1>No Posts</h1>;
// };



//  User generator API
// const App = ()=>{
//     const [user,setUser] = useState(null);
//     // const [change,setChange] = useState(true);
//     useEffect(()=>{
//         getUser().then((response)=>{
//             setUser(response.results[0])
//         })
//         .catch(()=>{console.log("Error in fetching detials")});
//     },[]);
//     const refresh = ()=>{
//         getUser().then((response)=>{
//             setUser(response.results[0])
//         })
//         .catch(()=>{console.log("Error in fetching detials")});
//     };
//     return (
//         <div>
//            {user &&  <UserCard name={user?.name} 
//             email={user?.email}/>}
//             <button onClick={()=>{refresh()}} > Change User</button>
//         </div>
//     );
// };



//  --- context API
// const App =()=>{
//     const state = useContext(CounterContext);
//     return (
//         <div className="post-card">
//             <h1>Counter - {state.count}</h1>
//             <CounterComp />
//             <CounterComp />
//             <CounterComp />
//             <CounterComp />
//         </div>
//     );
// };

// --- ecommerce cart
const App =()=>{
    return (
       <div>
            <ItemCard name="IPhone" price={100000}/>
            <ItemCard name="Mac" price={200000}/>
            <ItemCard name="Lid" price={200}/>
            <ItemCard name="Pen" price={5}/>

            <CartCard />
       </div>
    );
};

export default App;