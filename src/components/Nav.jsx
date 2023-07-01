import React from 'react';
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Nav() {
  

  const handleLogout = async () => {

    try {

      // Make a request to your logout API endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/logout', null, {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });

      if (response.status === 200) {
        Cookies.remove('token');
        window.location.reload();
      } else {
        console.error('Logout failed',response.status);
      }

    }catch(error){
      console.error('somethings wrong', error);
    };

  }

    return (
        <nav className="navbar border-bottom-primary bg-dark h-12">
        <div className="container-fluid px-5">
          <a className="navbar-brand text-white">ChatJimPT</a>
          <ul className="nav">
            <li className="nav-item">
              <button className="btn btn-dark text-white" onClick={handleLogout}>Logout</button>
            </li>
        </ul>
        </div>
      </nav>
    );
}