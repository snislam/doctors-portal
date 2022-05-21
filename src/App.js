import './App.css';
import Header from './Pages/Common/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Reviews/Reviews';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import Appoinment from './Pages/Appoinment/Appoinment';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Common/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReviews from './Pages/Dashboard/MyReviews';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Common/RequireAuth/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyAppoinment />} />
          <Route path='/dashboard/my-review' element={<MyReviews />} />
          <Route path='/dashboard/payment/:id' element={<Payment />} />
          <Route path='/dashboard/users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='/dashboard/addDoctor' element={<RequireAdmin><AddDoctor /> </RequireAdmin>} />
          <Route path='/dashboard/manageDoctor' element={<RequireAdmin><ManageDoctors /> </RequireAdmin>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
