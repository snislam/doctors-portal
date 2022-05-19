import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Common/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Common/Loading/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [loggedUser] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [token] = useToken(user || guser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let signInError;

    if (token) {
        navigate(from, { replace: true })
    }

    if (loggedUser) {
        return "Already logged in"
    }

    if (loading || sending) {
        return <Loading />
    }

    if (error || resetError) {
        signInError = <p className='text-red'>{error.message || resetError.message}</p>
    }

    const handleLogin = e => {
        e.preventDefault();
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = () => {
        if (!email) {
            toast('Please enter your email!')
            return;
        }
        sendPasswordResetEmail(email);
        setEmail('');
        toast("Reset Email Sent!")
    }

    return (
        <div className='px-10 md:px-0 md:flex md:justify-center md:items-center md:h-screen my-20 md:my-0'>
            <div className='shadow-md w-100 md:w-2/5 mx-auto p-10'>
                <h1 className='text-center text-2xl text-accent mb-5'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={e => setEmail(e.target.value)} className='border-2 rounded-md p-2' type="email" name="email" id="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <input className='border-2 rounded-md p-2' type="password" name="password" id="password" required />
                    </div>
                    <p onClick={handleResetPassword} className='cursor-pointer'>Forgot password?</p>
                    {signInError}
                    <div className='w-100'>
                        <input className='btn btn-block btn-accent my-5' type="submit" value="Login" />
                    </div>
                    <p>New to Doctor's Portal? <Link to='/register' className='text-primary'>Create new account.</Link></p>
                </form>
                <SocialLogin signInWithGoogle={signInWithGoogle} token={token} loading={gloading} />
            </div>
        </div>
    );
};

export default Login;