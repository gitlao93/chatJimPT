

export default function Register() {

    return (
        <div className='container'>
        <div className="card login-content card-body-shadow border-0">
          <div className="card-body bg-dark d-flex flex-column justify-content-center">
            <div className="text-logo-container text-center d-flex flex-column justify-content-center">
              <h1 className='text-logo text-white'>ChatJimPT</h1>
            </div>
            <h5 className="text-center text-white">Sign Up</h5>
            <form className="text-center">

              <div className="mb-3">
                <input type="text" className="form-control" id="nameInput" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="passwordConfirm" className="form-control" id="passwordInput" placeholder="Password"/>
              </div>

              <div className="mb-3">
                <input type="password" className="form-control" id="passwordConfirmInput" placeholder="ConfirmPassword"/>
              </div>
            </form>
          </div>
          <div className="nomember bg-dark">
            <p className="text-center text-white">Already a member? <a href="">Sign In</a></p>
          </div>
        </div>
        </div>
    );
}