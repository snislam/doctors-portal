import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-block uppercase hover:btn-outline'>Continue with google</button>
            </div>
        </div>
    );
};

export default SocialLogin;