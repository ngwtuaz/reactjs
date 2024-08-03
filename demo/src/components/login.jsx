import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {
    let [email, setEmail] = useState();
    let [password, setPass] = useState();
    const navigate = useNavigate();

    async function handleLogin() {
        console.log(email, password);
        try {
            let res = await axios.post("http://localhost:8000/auth/login", {
                email,
                password,
            });
            localStorage.setItem("access_token", res.data.access_token);
            navigate("/");
            console.log("login", res);
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <>
            <h1>Login</h1>
            <TextField onChange={(e) => { setEmail(e.target.value) }} id="standard-password-input" label="Email" type="Email" autoComplete="current-password" variant="standard" />
            <br />
            <TextField onChange={(e) => { setPass(e.target.value) }} id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
            <br />
            <br />
            <Button onClick={handleLogin} variant="outlined">Submit</Button>
        </>
    )
}