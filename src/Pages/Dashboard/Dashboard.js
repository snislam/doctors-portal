import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9] p-5">
                {/* <!-- Page content here --> */}
                <h1 className="text-2xl text-secondary">Welcome to yourDashboard</h1>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appoinments</Link></li>
                    <li><Link to='/dashboard/my-review'>My Reviews</Link></li>
                    <li>{admin &&
                        <Link to='/dashboard/users'>All Users</Link>
                    }</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;