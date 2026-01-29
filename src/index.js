import React, { useEffect, useState } from 'react'
import reactDom  from 'react-dom/client'
// -- practice

import PracApp from './pracApp';


// --
import App from "./todo"
import { ReduxApp } from './app';
import { CounterProvider } from './context/counter';
import {CartProvider} from "./context/cart";
import {BrowserRouter,Routes,Route, useParams, NavLink} from "react-router-dom"
import getPosts, { getPost } from './api/index';
import {Provider} from 'react-redux';
import store1 from "./redux/store1"
import {store} from "./redux/store";

// -- firebase

import {FireBaseApp} from "./fireApp"

// --firebase end

// --- fireStore

import {FireStoreApp} from './firestore'
// --- fireStore end
const root = reactDom.createRoot(document.getElementById('root'));
// function Component(){
//     const name = "Yogesh Kumar"
//     return <h1>Hello this is {name} </h1>
// };

// root.render(<Component></Component>);



// --- todo

// root.render(
//     <App></App>
// );
// root.render(<React.StrictMode>
//     <App></App>
// </React.StrictMode>);


// --- tic-tac-toe game
// root.render(<React.StrictMode>
//     <App></App>
// </React.StrictMode>);


// --- using contextAPI
// root.render(<React.StrictMode>
//     <CounterProvider>
//         <App></App>
//     </CounterProvider>
// </React.StrictMode>);


// -e-commerce cart
// root.render(<React.StrictMode>
//     <CartProvider>
//         <App></App>
//     </CartProvider>
// </React.StrictMode>);




//  Routing - MPA

// const Home=()=>{
//     return <h1>Hello From Home...</h1>
// };

// const About=()=>{
//     return <h1>Hello From About...</h1>
// };
// const User=()=>{
//     const params = useParams();
//     return <h1>Hello {params?.name}</h1>
// };
// const Post1=()=>{
//     return <h1>Hello From Post1...</h1>
// };
// const Post2=()=>{
//     return <h1>Hello From Posts/post2...</h1>
// };

// root.render(<React.StrictMode>
//     <BrowserRouter>
//      <Routes>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/about'  element={<About/>} />
//             <Route path='/user/:name'  element={<User/>} />
//             <Route path='/posts'>
//                 {/* <Route path='/1' element={<Post1/>}/> */}
//                 <Route path='1' element={<Post1/>}/>
//                 <Route path='2' element={<Post2/>}/>
//             </Route>
//      </Routes>
//     </BrowserRouter>
// </React.StrictMode>);



/** To Do 
 * Fetch post and show title as we click on title new page with tutle and whole body
 */


// const Home=()=>{
//     const [post,setPost] = useState(null);
//     useEffect(()=>{
//         getPosts().then((response)=>{
//             setPost(response);
//         })
//         .catch(()=>{console.log("Error in Fetching")});
//     },[]);
//     return (
//         <div>
//             <h1>Hello</h1>
//             {post && post.map((post)=> <NavLink style={{display:'block'}} to={`/post/${post.id}`}>{post.title}</NavLink>)}
//         </div>
//     );
// };
// const Post=()=>{
//     const params = useParams();
//     const [post,setPost]=  useState(null);
//     getPost(params.id).then((response)=>{
//         setPost(response)
//     })
//     .catch(()=>{console.log("Error in Getting Post")});
//     return (
//         <div>
//             <h1>{post?.title}</h1>
//             <p>{post?.body}</p>
//         </div>
//     );
// };


// // -- Routing
// root.render(<React.StrictMode>
//     <BrowserRouter>
//      <Routes>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/post/:id'  element={<Post/>} />
//      </Routes>
//     </BrowserRouter>
// </React.StrictMode>);








//   React Redux 

// root.render(
//     <React.StrictMode>
//        <Provider store={store}>
//          <App/>
//        </Provider>
//     </React.StrictMode>
// );


// React-Redux Cart App


// root.render(
//     <React.StrictMode>
//        <Provider store={store1}>
//         <ReduxApp />
//         </Provider>
//     </React.StrictMode>
// );


// Firebase Related App
// root.render(
//     <React.StrictMode>
//         <FireBaseApp />
//     </React.StrictMode>
// );



// firestore DB
// root.render(
//     <React.StrictMode>
//         <FireStoreApp />
//     </React.StrictMode>
// );


// ----- practice
root.render(
    <PracApp />
);

