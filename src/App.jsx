
import './App.css'
import Login from './Pages/Guest/Login'
import Register from './Pages/Guest/Register'
import Dashboard from './Pages/Protected/Dashboard'
import GuestNav from './components/GuestNav'
import Nav from './components/Nav'
import GuestRoute from './routes/GuestRoute'

function App() {
  

  return (
    <div className='vh-100'>
      <GuestNav />
      {/* <Nav /> */}
      {/* <GuestRoute /> */}
      <Dashboard />
        
    </div>
  )
}

export default App
