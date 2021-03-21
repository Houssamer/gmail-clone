import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';
import logo from './logo.png'

function Login() {

    const dispatch = useDispatch();

    function signIn() {
        auth.signInWithPopup(provider)
            .then(user =>  {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL  
                }))
            }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <img 
                src={logo} 
                alt="logo" 
                className="login__logo"
            />
            <button className="login__button" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
