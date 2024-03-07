import React from 'react'
import { auth, googleAuthProvider } from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
const Login = () => {
    const navigate = useNavigate();
    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/");
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <GoogleButton onClick={handleSignInWithGoogle} />

        </div>
    )
}

export default Login