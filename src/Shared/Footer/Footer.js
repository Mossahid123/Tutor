import React from 'react';
import './Footer.css'
import google from '../../images/social/social .png';
import facebook from '../../images/social/facebook.png';
import gitHub from '../../images/social/github.png';
import contact from '../../images/icon/contact.png';
import review from '../../images/icon/customer-review.png';
import email from '../../images/icon/email.png';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='sticky-bottom footer'>
            <div className='bg-white footer-container'>
                <div className='w-50 mx-auto pt-5'>
                    <div className=''>
                        <a href="https://web.facebook.com/" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='facebook' src={facebook} />
                            <p className='text-dark'>Facebook</p>
                        </a>
                    </div>
                    <div className=''>
                        <a href="https://web.facebook.com/" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='github' src={gitHub} />
                            <p className='text-dark'>GitHub</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='facebook' src={google} />
                            <p className='text-dark'>Google</p>
                        </a>
                    </div>
                </div>
                <div >
                    <h1 className='text-center text-info'>Thank You !!</h1>
                </div>
                <div className='w-50 mx-auto pt-5'>
                    <div>
                        <a href="https://www.google.com" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='contact' src={contact} />
                            <p className='text-dark'>Contact</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='review' src={review} />
                            <p className='text-dark'>Review</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com" className='text-decoration-none'>
                            <img style={{ height: '40px', borderRadius: '50%' }} alt='email' src={email} />
                            <p className='text-dark'>Email</p>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright@{year}</p>
        </div>
    );
};

export default Footer;