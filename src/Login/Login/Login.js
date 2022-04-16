import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
       navigate('/services')
    }
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Please Login</h1>
            <form className='form-container mt-5'>
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
            </form>
        </div>
    );
};

export default Login;