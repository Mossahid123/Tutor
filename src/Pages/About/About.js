import React from 'react';
import './About.css'
import {Card } from 'react-bootstrap';
import photo from '../../images/My-photo.png'

const About = () => {
    return (
        <div className="about-container w-50 mx-auto mt-5">
            <Card className='w-50 mx-auto cart-container' style={{ width: '15rem' }}>
                <Card.Img className='cart-img' variant="top"style={{height:'300px' , width:'300px'}} src={photo} />
                <Card.Body>
                    <Card.Title className='text-center text-primary fw-bold fs-3'>Mossahid Hussain</Card.Title>
                    <Card.Text className='text-center'>
                        <p>Actully,I don't believe in any goals except death Because Allah created as for a reason,That is his worship.Halal rijiq is the mandatory to be accepted our worship. If your work hard for something Allah will give you that as our it came in hadith.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;