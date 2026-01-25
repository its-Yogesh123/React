import React,{useState}from "react";
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const SignInPage = ()=>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const signInUser= ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value =>{
            console.log("Succes",value);
        })
        .catch((e)=>{console.log("failed",e)});
    };
    const signInWithGoogle= ()=>{
        console.log("hjvjhh")
        signInWithPopup(auth,providerGoogle)
        .then(value => alert("Success"))
        .catch((err)=> alert('Failed'));
    };
    return (
        <div className="signin" >
            <input type="email" 
            onChange={(e)=>{setEmail(e.target.value)}}
            required placeholder="Email"/> <br />
            <input type="password" 
            onChange={(e)=>{setPassword(e.target.value)}}
            required placeholder="Password"/> <br />
            <button onClick={signInUser}>Sign In</button>
            <button onClick={signInWithGoogle} style={{cursor:"pointer",margin:"5px"}}>Continuue with google</button>
        </div>
    );
};

export default SignInPage;