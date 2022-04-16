import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <h1>Please Register</h1>
            <form className='form-container'>
                <input type="text" name="name" placeholder='Enter name' />
                <input type="email" name="email" required placeholder='Enter email' />
                <input type="password" name="password" required placeholder='Enter password' />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Register;