import React from 'react';
import ButtonPrimary from '../../Common/Header/ButtonPrimary/ButtonPrimary';
import doctorSmall from '../../../assets/images/doctor-small.png'
import appoinmentbg from '../../../assets/images/appointment.png'

const AppoinmentBanner = () => {
    return (
        <div className='h-[450px] bg-no-repeat relative mt-20' style={{ backgroundImage: `url(${appoinmentbg})` }}>
            <div className="hero container mx-auto">
                <div className="grid lg:grid-cols-2 justify-center items-center absolute bottom-0 py-0">
                    <img src={doctorSmall} className="hidden lg:block h-[550px]" alt='chair' />
                    <div className='w-100 p-5 text-white text-left'>
                        <h3 className='text-primary text-left mb-3 text-lg font-bold'>Appoinment</h3>
                        <h1 className="text-3xl font-semibold">Make an appointment Today</h1>
                        <p className="py-6 pr-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;