import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = ({ signInWithGoogle, loading, token }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true })
    }

    const handleSocialSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div>
                <button onClick={handleSocialSignIn} className='btn btn-outline btn-block uppercase hover:btn-outline'>Continue with google</button>
            </div>
        </div>
    );
};

export default SocialLogin;