import { useEffect, useState } from 'react'

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (user) {
            const email = user?.user?.email;
            const newUser = { email: email };
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token;
                    localStorage.setItem('accessToken', token);
                    setToken(token);
                })
        }
    }, [user])

    return [token];
}

export default useToken;