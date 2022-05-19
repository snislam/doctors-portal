import { useState, useEffect } from 'react'

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoader, setAdminLoader] = useState(true);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setAdminLoader(false)
                setAdmin(data.admin);
            })
    }, [user, email])

    return [admin, adminLoader]
}

export default useAdmin;