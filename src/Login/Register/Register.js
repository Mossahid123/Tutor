import React, { useState } from 'react';
import auth from '../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});

    const navigate =useNavigate()

    if (error) {
        return (<div><p>Error: {error.message}</p></div>);
    }
    if (user) {
       navigate('/home')
    }
    return (
        <div className='mt-5 w-100 mx-auto'>
            <h1 className='text-center'>Please Register</h1>
            <form className='form-container mt-5'>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                />
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
                <button className='button' onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Register
                </button>
                <p className='text-center'> Already have an Account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;