export default function Register() {
    return (
      <div className="register">
        <div className="formregister">
          <form className="register-form">
            <h2>Register</h2>
            <div className="form-group">
              <input type="text" id="phonenumber" name="phonenumber" placeholder="Phone number" required />
            </div>
            <div className="form-group">
              <input type="text" id="username" name="username" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <p>Do you have an account ? <a href="/login">Sign in</a></p>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    )
  }
  