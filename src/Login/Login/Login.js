import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/services')

    }
    if (error) {
        <div><p>Error:{error.message}</p></div>
    }

    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('we are sending a message in your gmail.please go to your mail and update your password')
        }
        else {
            toast('enter your gmail first')
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Please Login</h1>
            <ToastContainer />
            <form className='form-container mt-5' onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    required
                />
                <button className='button' onClick={() => signInWithEmailAndPassword(email, password)}>
                    LogIn
                </button>
                <p className='text-center'> Do you have an account? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
                <button className='button' onClick={resetPassword}>Reset Password</button>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;