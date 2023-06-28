import { Link } from "react-router-dom";


export default function Register() {

    return (
        <div className='container'>
        <div className="card login-content card-body-shadow border-0">
          <div className="card-body bg-dark d-flex flex-column justify-content-center">
            <div className="text-logo-container text-center d-flex flex-column justify-content-center">
              <h1 className='text-logo text-white'>ChatJimPT</h1>
            </div>
            <h5 className="text-center text-white">Sign Up</h5>
            <form className="text-center my-4">
              <div className="mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Name" />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
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
              <div className="mb-3">
                <div className="form-floating">
                  <input type="password" className="form-control" id="passwordConfirm" placeholder="Confirm Password" />
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mx-auto">Sign Up</button>
            </form>
          </div>
          <div className="nomember bg-dark">
            <p className="text-center text-white">Already a member? <Link to="/sign-in">Sign In</Link></p>
          </div>
        </div>
        </div>
    );
}