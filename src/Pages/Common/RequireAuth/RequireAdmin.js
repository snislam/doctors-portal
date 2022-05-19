import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoader] = useAdmin(user)
    const location = useLocation();

    if (loading || adminLoader) {
        return <Loading />
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAdmin;