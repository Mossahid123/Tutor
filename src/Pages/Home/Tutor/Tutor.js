import React from 'react';
import {Card } from 'react-bootstrap';

const Tutor = ({tutor}) => {
    const { trainer, profession, gander, img ,commentry } = tutor
    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{trainer}</Card.Title>
                        <Card.Text>
                            <p>Profession : {profession}</p>
                            <p>Gander: {gander}</p>
                            <p>Commentry: {commentry}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Tutor;