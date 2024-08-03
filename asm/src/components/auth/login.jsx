export default function Login() {
    return (
        <div className="login">
            <div className="formLogin">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <input type="text" id="username" name="username" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <p>Do not have an account ? <a href="/register">Sign up</a></p>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}
