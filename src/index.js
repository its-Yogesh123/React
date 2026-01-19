import React from 'react'
import reactDom  from 'react-dom/client'
import App from "./todo"
import { CounterProvider } from './context/counter';
import {CartProvider} from "./context/cart";
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom"
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

const Home=()=>{
    return <h1>Hello From Home...</h1>
};

const About=()=>{
    return <h1>Hello From About...</h1>
};
const User=()=>{
    const params = useParams();
    return <h1>Hello {params?.name}</h1>
};
const Post1=()=>{
    return <h1>Hello From Post1...</h1>
};
const Post2=()=>{
    return <h1>Hello From Posts/post2...</h1>
};

root.render(<React.StrictMode>
    <BrowserRouter>
     <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about'  element={<About/>} />
            <Route path='/user/:name'  element={<User/>} />
            <Route path='/posts'>
                {/* <Route path='/1' element={<Post1/>}/> */}
                <Route path='1' element={<Post1/>}/>
                <Route path='2' element={<Post2/>}/>
            </Route>
     </Routes>
    </BrowserRouter>
</React.StrictMode>);