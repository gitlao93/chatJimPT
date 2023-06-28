
import './App.css'
import Login from './Pages/Guest/Login'
import Register from './Pages/Guest/Register'
import Dashboard from './Pages/Protected/Dashboard'
import GuestDashboard from './components/GuestDashboard'

function App() {
  

  return (
    <div className='vh-100'>
      <GuestDashboard />
      <Dashboard />
        
    </div>
  )
}

export default App
