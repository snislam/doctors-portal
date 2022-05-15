import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Common/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Common/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading />
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='px-10 md:px-0 md:flex md:justify-center md:items-center md:h-screen my-20 md:my-0'>
            <div className='shadow-md w-100 md:w-2/5 mx-auto p-10'>
                <h1 className='text-center text-2xl text-accent mb-5'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input className='border-2 rounded-md p-2' type="email" name="email" id="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <input className='border-2 rounded-md p-2' type="password" name="password" id="password" required />
                    </div>
                    <p className=''>Forgot password?</p>
                    <p className='text-red'>{error?.message}</p>
                    <div className='w-100'>
                        <input className='btn btn-block btn-accent my-5' type="submit" value="Login" />
                    </div>
                    <p>New to Doctor's Portal? <Link to='/register' className='text-primary'>Create new account.</Link></p>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;