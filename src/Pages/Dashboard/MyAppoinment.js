import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MyAppoinment = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://lit-retreat-57024.herokuapp.com/appoinment?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast("Time Expire, Please login");
                    signOut(auth);
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setAppoinments(data)
            })
    }, [user, navigate])

    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map(a => <tr key={a._id}>
                                <th>{appoinments.indexOf(a) + 1}</th>
                                <td>{a.patient}</td>
                                <td>{a.treatmentName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link className='btn btn-xs btn-primary' to={`/dashboard/payment/${a._id}`} > Pay</Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppoinment;