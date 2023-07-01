
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import GuestNav from './components/GuestNav'
import Nav from './components/Nav'
import Cookies from 'js-cookie';
import Dashboard from './Pages/Protected/Dashboard';
import Register from './Pages/Guest/Register';
import Login from './Pages/Guest/Login';




function App() {
  const token = Cookies.get('token');
  const isAuthenticated = !!token;

  

  return (
    <div className='vh-100'>
        {isAuthenticated ? <Nav /> : <GuestNav />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
          <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />} />
          <Route path="/dashboard" element={isAuthenticated ?<Dashboard />: <Navigate to="/" replace />}/>
        </Routes>
    </div>
  )
}

export default App
