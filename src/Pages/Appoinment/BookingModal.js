import { format } from 'date-fns';
import React from 'react';
import axios from 'axios';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const newDate = format(date, "PP");

    const handleSubmit = e => {
        e.preventDefault();

        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;

        const bookingDetails = { name, slot, date: newDate, email, number };

        // data post to mongo
        axios.post(`http://localhost:5000/bookings`, bookingDetails)
            .then(resposnse => {
                console.log(resposnse.data)
            })
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <div className='flex flex-row-reverse justify-between items-center'>
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle">✕</label>
                        <h3 className="font-bold text-2xl">{name}</h3>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="text" name="date" id="date" value={format(date, "PP")} disabled />

                        <select className="w-100 p-2 border-2 border-accent mb-3 rounded-lg" name="slot" id="slot">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="text" name="name" id="name" placeholder='Full name' required />

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="email" name="email" id="email" placeholder='Enter email' required />

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="number" name="number" id="number" placeholder='Phone number' required />

                        <input className='w-100 p-2 mb-3 rounded-lg btn btn-secondary cursor-pointer text-white border-0' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;