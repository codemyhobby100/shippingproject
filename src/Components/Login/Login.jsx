import React, { useState } from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, provider } from "../../../firebase"
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("success")
        navigate('/dashboardpage')
    }).catch((error) => {
        console.log(error.message);
    })
}


    const handleClick = (e)=>{
        e.preventDefault();
        signInWithPopup(auth, provider).then(async (data) => {
            const credential = GoogleAuthProvider.credentialFromResult(data);
            // The signed-in user info.
            const user = data.user  

            if (user) {
                const userRef = doc(db, 'users', user.uid);
                await setDoc(userRef, {
                  email: user.email,
                });
                // dispatch(setUser(user));

              }
            console.log(credential) 
            console.log(user) 
            navigate('/dashboardpage')
           
        })
    }


  return (
    <div className="loginFormContainer">
      <form className="loginForm" onSubmit={signIn}>
        <h2>Sign in</h2>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required="required"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required="required"
          />
        </div>
        <button className='google-btn' onClick={handleClick} type="submit"> 
            <span className='google-icon'><FcGoogle /></span> 
            <span className='google-text'>Google Sigin</span> 
        </button>
        <button className='login-btn' onClick={signIn} type="submit">Login</button>
        <div className="login-txt">Don't have an account?    <Link to='/signup'>Sign up</Link></div>
      </form>
    </div>
  )
}

export default Login