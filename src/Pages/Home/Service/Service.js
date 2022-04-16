import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name,balance,about,picture, id } = service
    const navigate = useNavigate()
    const nevigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    };
    return (
        <div style={{height:'500px'}} className='service'>
            <img style={{height:'300px'}} className='w-100' src={picture} alt='car repair' />
            <h3>{name}</h3>
            <p>Price:{balance}</p>
            <p><small>{about.slice(0 ,100)}</small></p>
            <button onClick={()=>nevigateToServiceDetail(id)} className='button btn btn-primary w-100'>Details</button>
        </div>
    );
};

export default Service;