import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try{
      
      const response = await axios.post('http://127.0.0.1:8000/api/store',{
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })

      if(response.status === 200){

        // Extract the token from the response
        const token = response.data.data.token;
        const id = response.data.data.user.user_id;
        // Store the token in a cookie
        Cookies.set('token', token);
        Cookies.set('id', id);
        // Redirect to the dashboard
        window.location.reload();

      }else{

        console.log('unable to register')

      }

    }catch(error){
      console.log(error,"asdf");
    }
  }


  return (
      <div className='container'>
      <div className="card login-content card-body-shadow border-0">
        <div className="card-body bg-dark d-flex flex-column justify-content-center">
          <div className="text-logo-container text-center d-flex flex-column justify-content-center">
            <h1 className='text-logo text-white'>ChatJimPT</h1>
          </div>
          <h5 className="text-center text-white">Sign Up</h5>
          <form className="text-center my-4" onClick={handleRegister}>
            <div className="mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <label htmlFor="passwordConfirm">Confirm Password</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mx-auto">Sign Up</button>
          </form>
        </div>
        <div className="nomember bg-dark">
          <p className="text-center text-white">Already a member? <Link to="/">Sign In</Link></p>
        </div>
      </div>
      </div>
  );
}