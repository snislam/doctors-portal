import './App.css';
import Header from './Pages/Common/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Reviews/Reviews';
import Appoinment from './Appoinment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appoinment' element={<Appoinment />} />
        <Route path='/about' element={<About />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
