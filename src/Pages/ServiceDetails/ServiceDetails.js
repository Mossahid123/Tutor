import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} =useParams()
    return (
        <div>
            <h1>service details: {serviceId}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Cheackout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;