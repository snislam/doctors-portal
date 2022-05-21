import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CkeckoutForm';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading/Loading';

const stripePromise = loadStripe('pk_test_51L1trSH9rKtnD4mbKyOo1LnMYbzJEv2KXug78Ayi9Q9YZ1oouUNbpTBxqXhw8khvsaygnxEUOD9LabzwUWPXBYw600pcwZNvrd');

const Payment = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('booking', () => fetch(`https://lit-retreat-57024.herokuapp.com/bookings/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='bg-slate-50 w-full md:w-1/2  p-5 flex justify-center flex-col mx-auto mt-10'>
            <h2 className='text-accent font-semibold text-lg'>Hello {data.patient}</h2>
            <div>
                <h3>You choose <span className='text-purple-700 font-bold'>{data.treatmentName}</span> service.</h3>
                <p>We will meet on <span className='text-purple-700'>{data.date}</span> at <span className='text-purple-700'>{data.slot}</span></p>
                <p>Please pay only <span className='text-purple-700 font-bold'>${data.price}</span> for successful booking.</p>
            </div>
            <div className='p-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;