import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Booking from './pages/Booking';
import Tours from './pages/Tours';
import Payment from './pages/Payment';
import AboutUs from './pages/AboutUs';
import AdminDashboard from './pages/Dashboard';
import ClerkDashboard from './pages/ClerkDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/clerkdashboard' element={<ClerkDashboard />} />
      </Routes>
    </Router>
  );
}

export default App
