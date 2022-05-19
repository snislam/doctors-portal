import { format } from 'date-fns';
import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from "react-toastify"

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const newDate = format(date, "PP");
    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault();

        const slot = e.target.slot.value;
        const patientName = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;

        const bookingDetails = {
            treatmentId: _id,
            treatmentName: name,
            patient: patientName,
            slot,
            date: newDate,
            email,
            number
        };

        // data post to mongo
        axios.post(`https://lit-retreat-57024.herokuapp.com/bookings`, bookingDetails)
            .then(data => {
                if (data.data.success) {
                    toast(`Successfully booked in ${data.data.booking?.date} at ${data.data.booking?.slot}`)
                } else {
                    toast(`Already have a booking in ${data.data.booking?.date} at ${data.data.booking?.slot}`)
                }
                refetch();
                setTreatment(null)
            })
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
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="text" name="name" id="name" value={user.displayName} disabled />

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="email" name="email" id="email" value={user.email} disabled />

                        <input className='w-100 p-2 border-2 border-accent mb-3 rounded-lg' type="number" name="number" id="number" placeholder='Phone number' required />

                        <input className='w-100 p-2 mb-3 rounded-lg btn btn-secondary cursor-pointer text-white border-0' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;