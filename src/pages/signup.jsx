import React, { useState } from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"
export const SignUpPage = ()=>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const createUser = ()=>{
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth,email,password)
        .then((user)=>alert("Success"))
        .catch((err)=>{alert("Failed")});
    };
    return (
        <div style={{width:"200px",margin:"100px auto",textAlign:"center"}}>
            <input type="email" placeholder="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required /> <br />
            <input type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter Password"
            required /> <br />
            <button onClick={createUser}>Sign Up</button>
        </div>
    );
};