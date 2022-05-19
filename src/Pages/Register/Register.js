import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Common/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Common/Loading/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        gUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [token] = useToken(gUser || guser);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    if (loading) {
        return <Loading />
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='px-10 md:px-0 md:flex md:justify-center md:items-center md:h-screen my-20 md:my-0'>
            <div className='shadow-md w-100 md:w-2/5 mx-auto p-10'>
                <h1 className='text-center text-2xl text-accent mb-5'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name</label>
                        <input className='border-2 rounded-md p-2' type="text" name="name" id="name" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input className='border-2 rounded-md p-2' type="email" name="email" id="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <input className='border-2 rounded-md p-2' type="password" name="password" id="password" required />
                    </div>
                    <p className='text-red-500'>{error?.message}</p>
                    <div className='w-100'>
                        <input className='btn btn-block btn-accent my-5' type="submit" value="Register" />
                    </div>
                    <p>Already have an account? <Link to='/login' className='text-primary'>Login here.</Link></p>
                </form>
                <SocialLogin signInWithGoogle={signInWithGoogle} token={token} loading={gloading} />
            </div>
        </div>
    );
};

export default Register;