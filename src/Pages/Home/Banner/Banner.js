import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import ButtonPrimary from '../../Common/Header/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero min-h-screen container mx-auto px-10 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-100 lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                    <div className='w-100 lg:w-1/2 text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <ButtonPrimary />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;