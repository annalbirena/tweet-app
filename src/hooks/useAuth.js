import { auth, googleProvider } from '../firebase/config';
import { signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const { googleUser, setGoogleUser, setUser } = useContext(UserContext);  //Contexto de Usuario
    //useNavigate para redirigir a una ruta especifica
    const navigate = useNavigate();  //Source: https://reactrouter.com/docs/en/v6/examples/auth

    //HOOK DE LOGIN
    const loginWithGoogle = () => {
        //https://firebase.google.com/docs/auth/web/google-signin
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const response = result.user;
                return response;
            })
            .then((response) => {
                //Se setea el usuario luego de recibir la respuesta del Login
                setGoogleUser(response);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    //UseEffect que redirige a Register si el usuario se logueo por Google correctamente
    useEffect(() => {
        if (googleUser) {
            navigate("/register", { replace: true });
        }
    }, [googleUser])

    //HOOK DE LOGOUT
    const logOut = async () => {
        signOut(auth)
            .then((response) => {
                return response;
            })
            .then(() => {
                navigate("/", { replace: true });
                setUser();
            })
            .catch((e) => {
                console.log("Error en logout: ", e)
            });
    }

    return { loginWithGoogle, logOut};
}

export default useAuth;