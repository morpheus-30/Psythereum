import React, { useState } from "react";

import {auth} from "../firebase";
// import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,useLocation } from "react-router-dom";

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email,setEmail]= useState(null);
    const [pswd, setPswd] = useState();

    const handleSubmit= ()=> {
        if(email===null){
            alert("Enter email");
            return;
        }
        if(pswd===null){
            alert("Enter password");
            return;
        }
        signInWithEmailAndPassword(email, pswd).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
            // alert("Login success");
            
            
            // ...
          })
    }

    return (
        <>
        <div className="my-10 w-full flex justify-start items-center">
            <span className="text-2xl mx-10 font-semibold">PSYTHEREUM</span>
        </div>
        <div className="my-20 w-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl m-4">Login/Signup</h2>
            <div className="flex flex-col border-black border-2 rounded-xl bg-my-gray p-10">
                <label htmlFor="mobile">Email</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" onChange={e=>setPswd(e.target.value)} />
                <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
                    <button className="text-white h-8" onClick={()=>{
                        signInWithEmailAndPassword(auth,email,pswd).then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            if(location.state==="patient"){
                                navigate("/userDashboard");
                            }else if(location.state==="researcher"){
                                navigate("/resDashboard");
                            }else{
                                navigate("/chirag");
                            }
                            
                            // ...
                          }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage);
                          }
                            )   
                    }}>Login</button>
                </div>
                <div className="h-3"></div>
            </div>
            <div className="h-3"></div>
            <span>New Here? <a href="/register" className="font-bold">Create Account</a></span>
        </div>
        </>
    );
};

export default LoginPage;