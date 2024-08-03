

function RegisterForm() {
    return (
        <>
            <h1>Register</h1>
            <form>
                <div >
                    <label className="form-label">Email address</label>
                    <input type="email" />
                </div>
                <div >
                    <label className="form-label">Password</label>
                    <input type="password" id="exampleInputPassword1" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegisterForm;