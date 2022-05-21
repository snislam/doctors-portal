import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, refetch }) => {

    const handleDoctorDelete = () => {
        const confirmed = window.confirm(`Are you sure to remove ${doctor.name}?`)
        if (confirmed) {
            fetch(`https://lit-retreat-57024.herokuapp.com/doctors/${doctor.email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Doctor ${doctor.name} is successfuly removed`)
                        refetch();
                    } else {
                        toast.error(`Not removed`)
                    }
                })
        } else {
            toast.success(`Not deleted`)
        }
    }


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{doctor.speciality}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {doctor.name}
                <br />
                <span className="badge badge-ghost badge-sm">{doctor.speciality} specialist</span>
            </td>
            <th>
                <button onClick={handleDoctorDelete} className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default DoctorRow;