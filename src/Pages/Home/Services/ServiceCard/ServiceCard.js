import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, name, details } = service;
    return (
        <div className='p-5 flex flex-col items-center text-center border-0 shadow-lg rounded-md'>
            <img className='w-20 h-20 mb-5' src={img} alt={name} />
            <h3 className='text-lg font-semibold'>{name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default ServiceCard;