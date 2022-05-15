import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookServiceCard from './BookServiceCard';

const AppoinmentOn = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

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
            />}
        </div>
    );
};

export default AppoinmentOn;