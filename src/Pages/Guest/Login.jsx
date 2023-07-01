import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {  Link,useNavigate  } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const token = response.data.data.token;
        const id = response.data.data.user.user_id;
        
        Cookies.set('token', token);
        Cookies.set('id', id);
        console.log(response);
        setLoggedIn(true);
        console.log(isLoggedIn)
        navigate('/');

        
      } else {
        console.error('Login failed',response.status);
      }


      if (isLoggedIn) {
        // Redirect to the dashboard page
        return null; // or display a loading state while redirecting
      }
    
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
      <div className='container'>
      <div className="card login-content card-body-shadow border-0">
        <div className="card-body bg-dark d-flex flex-column justify-content-center">
          <div className="text-logo-container text-center">
            <h1 className='text-logo text-white'>ChatJimPT</h1>
          </div>
          <h5 className="text-center text-white">Sign In</h5>
          <form className="text-center my-4" onSubmit={handleLogin}>

            <div className="mb-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mx-auto">Login</button>
            <p className="forgot"><a href="">Forgot Password?</a></p>
          </form>
        </div>
        <div className="nomember bg-dark">
          <p className="text-center text-white">Not a member? <Link to="/sign-up">Create an Account</Link></p>
        </div>
      </div>
      </div>
  );
}