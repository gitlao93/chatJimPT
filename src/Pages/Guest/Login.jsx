import { Link } from "react-router-dom";


export default function Login() {

    return (
        <div className='container'>
        <div className="card login-content card-body-shadow border-0">
          <div className="card-body bg-dark d-flex flex-column justify-content-center">
            <div className="text-logo-container text-center">
              <h1 className='text-logo text-white'>ChatJimPT</h1>
            </div>
            <h5 className="text-center text-white">Sign In</h5>
            <form className="text-center my-4">

              <div className="mb-3">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
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