import React from 'react';
import notFound from '../../images/4of4.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>Teacher is sleeping</h1>
            <img className='w-100 h-100' src={notFound} alt="NotFound" />
        </div>
    );
};

export default NotFound;