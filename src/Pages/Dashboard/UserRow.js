import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ d, index, refetch }) => {
    const { email, role } = d;
    const makeAdmin = () => {
        fetch(`https://lit-retreat-57024.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast('You can not make an admin. Be an admin first!')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast('Successfully added as admin');
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{d.email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button> : <button onClick={makeAdmin} className='btn btn-secondary btn-outline btn-xs'>Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;