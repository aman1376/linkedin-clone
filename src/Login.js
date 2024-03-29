import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import './Login.css'
import { login } from './features/userSlice';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();
    const register=()=>{
        if(!name){
            return alert("Please enter a name!")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
        .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                }))
            })
        }).catch((error)=>alert(error));
    };
    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL,
            }))
        })
        .catch((error)=>alert(error));
    };
  return (
    <div className='login'>
      <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo-768x432.png" alt=""/>
      <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full Name (required if regestering)' type="text"/>
        <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text"/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email"/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password"/>
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{" "}
        <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
