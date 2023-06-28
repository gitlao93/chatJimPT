

export default function Login() {

    return (
        <div className='container'>
        <div className="card login-content card-body-shadow border-0">
          <div className="card-body bg-dark d-flex flex-column justify-content-center">
            <div className="text-logo-container text-center">
              <h1 className='text-logo text-white'>ChatJimPT</h1>
            </div>
            <h5 className="text-center text-white">Sign In</h5>
            <form className="text-center">

              <div className="mb-3">
                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
              </div>
              <p className="forgot"><a href="">Forgot Password?</a></p>
            </form>
          </div>
          <div className="nomember bg-dark">
            <p className="text-center text-white">Not a member? <a href="">Create an Account</a></p>
          </div>
        </div>
        </div>
    );
}