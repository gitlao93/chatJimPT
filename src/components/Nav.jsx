import {Link} from 'react-router-dom'

export default function Nav() {

    return (
        <nav className="navbar border-bottom-primary bg-dark h-12">
        <div className="container-fluid px-5">
          <a className="navbar-brand text-white">ChatJimPT</a>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Register">Logout</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
}