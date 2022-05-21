import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://lit-retreat-57024.herokuapp.com/doctors', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="overflow-x-auto w-full my-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map(doctor => <DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctors;