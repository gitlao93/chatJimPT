import {Link} from 'react-router-dom'

export default function GuestNav() {

    return (
        <nav className="navbar bg-dark h-12 nav-shadow">
        <div className="container">
          <a className="navbar-brand text-white">ChatJimPT</a>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sign-in">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sign-up">Sign Up</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
}