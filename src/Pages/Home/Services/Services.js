import React from 'react'
import fluorid from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import ServiceCard from './ServiceCard/ServiceCard'
import ButtonPrimary from '../../Common/Header/ButtonPrimary/ButtonPrimary'

const Services = () => {
    const services = [
        { id: 101, name: "Fluoride Treatment", img: fluorid, details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },

        { id: 102, name: "Cavity Filling", img: cavity, details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },

        { id: 103, name: "Teeth Whitening", img: whitening, details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
    ]
    return (
        <div className='container mx-auto px-10 lg:px-0'>
            <div className='pb-0'>
                <h3 className='text-primary text-center text-lg font-bold'>Our services</h3>
                <h2 className='text-3xl text-center text-accent'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </div>
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="w-100 lg:w-[458px] lg:h-[576px] rounded-lg shadow-2xl" alt='chair' />
                    <div className='w-100 lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left pl-0 lg:pl-10'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services