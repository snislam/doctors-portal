import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div class="hero min-h-screen container mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="w-100 lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                    <div className='w-100 lg:w-1/2 mt-10 lg:mt-0'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;