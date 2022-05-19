import React from 'react';

const BookServiceCard = ({ service, setTreatment }) => {
    const { name, available } = service;
    return (
        <div className='p-5 rounded-lg shadow-md text-center'>
            <h3 className='text-secondary text-lg font-semibold'>{name}</h3>
            <p className='pt-3'>
                {
                    available.length ? <span>{available[0]}</span> : <span className='text-red-500'>No time available in this day.</span>
                }
            </p>
            <p className='pt-3 uppercase'>{available.length} {available.length > 1 ? 'spaces' : 'space'} Available</p>
            <label
                onClick={() => setTreatment(service)}
                htmlFor='booking-modal'
                className='btn btn-secondary text-white text-sm my-3 modal-button'
                disabled={available.length === 0}
            >Book Appoinment</label>
        </div>
    );
};

export default BookServiceCard;