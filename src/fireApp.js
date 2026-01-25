import { getDatabase, set, ref } from "firebase/database"
import { app } from "./firebase"
import { useEffect, useState } from "react";
// --- authentication
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signOut } from "firebase/auth"
import { SignUpPage } from "./pages/signup"
import SignInPage from "./pages/signin";
// const db = getDatabase(app);
// const putData = (Name,email,userId)=>{
//     set(ref(db,'users/'+userId),{
//         name:Name,
//         email:email
//     });
// };
// export const FireBaseApp =()=>{
//     const [id,setId] = useState(0);
//     return (
//         <div>
//             <h1>Welcome to firebase Authentication</h1>
//             <button onClick={()=>{putData("Yogesh","yogesh@gmail.com",id);setId(id+1);}}>Click</button>
//         </div>
//     );
// };



// ------------ Authentication 

// const auth = getAuth(app);

// export const FireBaseApp= ()=>{
//     const signUpUser = ()=>{
//         console.log("Function Called!!!");
//         const email="yogesh@gmail.com";
//         const password = "123456";
//         createUserWithEmailAndPassword(auth,email,password)
//         .then((value)=>{console.log("Success " , value);})
//         .catch((err)=>{console.log("Sigup Failed",err)});
//     };
//     return (
//         <div>
//             <h1> Authentication</h1>
//             <button onClick={signUpUser}>Sign-Up</button>
//         </div>
//     );
// };

// ------ SignUp page via Email
// const auth = getAuth(app);
// export const FireBaseApp= ()=>{
//     const signUpUser = ()=>{
//         console.log("Function Called!!!");
//         const email="yogesh@gmail.com";
//         const password = "123456";
//         createUserWithEmailAndPassword(auth,email,password)
//         .then((value)=>{console.log("Success " , value);})
//         .catch((err)=>{console.log("Sigup Failed",err)});
//     };
//     return (
//        <div>
//          <SignUpPage />
//         <SignInPage />
//        </div>
//     );
// };


// ------ Sign-in Using Google Provider
const auth = getAuth(app);
export const FireBaseApp = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user)
            } else {
                setUser(null);
            }
        });
    }, []);

    if (user === null) {
        return (
            <div>
                <SignUpPage />
                <SignInPage />
            </div>
        );
    }else{
        return (
            <div>
                <h1>Hello {user.displayName}, welcome</h1>
                <button onClick={()=>{signOut(auth)}}>Log Out</button>
            </div>
        );
    }

};