import React from 'react';
import './About.css'
import { Button, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about-container w-50 mx-auto mt-5">
            <Card className='w-50 mx-auto cart-container' style={{ width: '15rem' }}>
                <Card.Img className='cart-img' variant="top"style={{height:'300px' , width:'300px'}} src="https://i.ibb.co/BV0WgHm/IMG-5471-1-1.png" />
                <Card.Body>
                    <Card.Title className='text-center text-primary fw-bold fs-3'>Mossahid Hussain</Card.Title>
                    <Card.Text className='text-center'>
                        <h5>Profile</h5>
                        <p >Profession : <small className='text-primary'>Student</small></p>
                        <h5>Parmanent Adress</h5>
                        <p><small>Sristigor , Shibpur , Narsingdi ,Dhaka ,Bangladesh</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;