import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} =useParams()
    return (
        <div className='mb-5'>
            <div className='text-center mt-5'>
                <h1><span className='text-info'>Sorry!</span> I could not update our service detail</h1>
                <h3>Please, visit another time to see more details</h3>
                <h5>If you want to join you can click the check button</h5>
            </div>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Cheackout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;