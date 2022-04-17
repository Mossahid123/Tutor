import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div className='w-50 bg-info' style={{ height: '1px' }}></div>
                <p className='mt-2 mx-2 text-danger'>or</p>
                <div className='w-50 bg-info' style={{ height: '1px' }}></div>
            </div>
            <div className='w-50 mx-auto border border-1'>
                <button style={{height:'40px'}} className='w-100 bg-info mx-auto border-0' onClick={() => signInWithGoogle()}><span className=''>Google</span> </button>
            </div>
        </div>
    );
};

export default SocialLogin; <h1>SingIn with Google</h1>