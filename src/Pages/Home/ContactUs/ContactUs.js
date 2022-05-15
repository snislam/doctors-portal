import React from 'react';
import bgImg from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div className='text-white' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='w-4/5 lg:w-2/5 mx-auto flex flex-col py-10'>
                <h3 className='text-primary text-center mb-2 text-lg font-bold uppercase'>Contact Us</h3>
                <h1 className="text-3xl text-center font-semibold">Stay Connected With Us</h1>
                <form className='flex flex-col mt-5'>
                    <input className='rounded-md mb-2 py-2 px-3 ' type="text" name="name" id="name" placeholder='Enter your name' required />

                    <input className='rounded-md mb-2 py-2 px-3 ' type="email" name="email" id="email" placeholder='Enter your email' required />

                    <textarea className='rounded-md mb-2 py-2 px-3 ' name="message" id="message" cols="30" rows="3" placeholder='Write message ...' required></textarea>

                    <input className='btn btn-primary text-white w-24 mx-auto mt-3 rounded-md mb-2 py-2 px-3' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;