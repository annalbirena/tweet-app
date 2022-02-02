import { React } from "react";
import useAuth from "../../../../hooks/useAuth";
import './login.scss';

const Login = () => {
    const { loginWithGoogle } = useAuth(null);

    return (
        <div className="login-container">
            <h1>LOREM IPSUM DOLOR</h1>
            <p className="text">Lorem, ipsum dolor sit amet, consectetur adipisicing elit</p>
            <button className="btn-sign" onClick={() => loginWithGoogle()}>Sign in with Google</button>
        </div>
    )
}

export default Login;