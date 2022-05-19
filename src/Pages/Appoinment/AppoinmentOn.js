import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading/Loading';
import BookingModal from './BookingModal';
import BookServiceCard from './BookServiceCard';

const AppoinmentOn = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-20 px-12'>
            <p className='text-2xl text-center text-secondary'>Available Appointments on {format(date, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
                {
                    services.map(service => <BookServiceCard
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                treatment={treatment}
                date={date}
                refetch={refetch}
            />}
        </div>
    );
};

export default AppoinmentOn;