import {Link} from 'react-router-dom'

export default function GuestDashboard() {

    return (
        <nav className="navbar bg-dark h-12">
        <div className="container">
          <a className="navbar-brand text-white">ChatJimPT</a>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Register">Sign Up</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
}