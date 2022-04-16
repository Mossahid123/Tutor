import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Please Login!</h1>
            <form>
                <input type="email" name="email" required placeholder='Enter email' />
                <input type="password" name="password" required placeholder='Enter password' />
                <input type="submit" value="LogIn" />
                <p>Have an account? <Link to='/register'>Please Register</Link></p>
            </form>
        </div>
    );
};

export default Login;