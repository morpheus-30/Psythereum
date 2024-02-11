import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail]= useState("");
    const [pswd, setPswd] = useState("");
    const [confirmPswd, setConfirmPswd] = useState("");
    const navigate = useNavigate();

 
    const handleSubmit= (e)=> {
      e.preventDefault();
      if(pswd!==confirmPswd){
        alert("Passwords do not match");
        return;
      }
      // const providers = await fetchSignInMethodsForEmail(auth, email);
      // if(providers.length!=0){
      //   alert("Account already exist");
      //   return;
      // }
      createUserWithEmailAndPassword(auth,email,pswd).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    })
      // alert("Sign up success");
      navigate("/login",{replace:true});
      // console.log("hogaya login");
      return;
    }
  return (
    <>
        <div className="my-10 w-full flex justify-start items-center">
            <span className="text-2xl mx-10 font-semibold">PSYTHEREUM</span>
        </div>
        <div className="my-20 w-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl m-4">Create a new Account </h2>
            <div className="flex flex-col border-black border-2 rounded-xl bg-my-gray p-10">
              <label htmlFor="email">Email</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Confirm Password" value={confirmPswd} onChange={(e) =>setConfirmPswd(e.target.value)} />
                <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
                    <button className="text-white h-8" onClick={async()=>{
                      await createUserWithEmailAndPassword(auth,email,pswd);
                      navigate("/login",{replace:true});
                    }} >SignUp</button>
                </div>
                <div className="h-3"></div>
            </div>
        </div>
        </>
  )
}

export default Register