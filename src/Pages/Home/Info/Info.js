import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto px-6 lg:px-0 py-16'>
            <div className='flex flex-row bg-gradient-to-r from-secondary to-primary py-10 px-5 rounded-md mb-2 mr-0 lg:mr-2'>
                <img className='w-20 h-20 mr-5' src={clock} alt="" />
                <div className='flex flex-col text-white'>
                    <h3 className='font-bold mb-2 capitalize'>Opening Hours</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, neque!</p>
                </div>
            </div>

            <div className='flex flex-row bg-gradient-to-r from-accent to-accent py-10 px-5 rounded-md mb-2 mx-0 lg:mx-1'>
                <img className='w-20 h-20 mr-5' src={marker} alt="" />
                <div className='flex flex-col text-white'>
                    <h3 className='font-bold mb-2 capitalize'>Visit Our Location</h3>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>

            <div className='flex flex-row bg-gradient-to-r from-secondary to-primary py-10 px-5 rounded-md mb-2 ml-0 lg:ml-2'>
                <img className='w-20 h-20 mr-5' src={phone} alt="" />
                <div className='flex flex-col text-white'>
                    <h3 className='font-bold mb-2 capitalize'>Contact us now</h3>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;