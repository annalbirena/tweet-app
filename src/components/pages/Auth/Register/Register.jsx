import React from "react";
import './register.scss';
import { UserContext } from "../../../../context/UserContext";
import { useContext } from "react";
import useUsers from "../../../../hooks/useUsers";
import { TweetsContext } from "../../../../context/TweetContext";

const Register = () => {

    //Contexto de user
    const {googleUser, user, setUser, setLoading} = useContext(UserContext);
    const { setLoadingTweets } =  useContext(TweetsContext);
    // Custom Hoot Add User
    const { addNewUser } = useUsers();

     const handleChange = (e) => {
        const newUser = {
            ...user,
            name: googleUser.displayName,
            email: googleUser.email,
            uid: googleUser.uid,
            photo: googleUser.photoURL,
            [e.target.name]: e.target.value  
        }
        setUser(newUser);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Validar si el usuario eligió un color, de lo contrario poner por default pink
        if (!user.color) {
            console.log("no incluye color");
            user.color="pink";
        }
        addNewUser(user)
        setLoading(true);
        setLoadingTweets(true);
    }
    
    return (
        <div className="register-container">
            <h2>WELCOME
                {googleUser && <span className="block text-pink">{googleUser.displayName}!</span>}
            </h2>
            <form  onSubmit={handleSubmit}>
                <input className="input-username" type="text" name="username"  onChange={handleChange} placeholder="Type your username" required />
                <span className="form-text">Select your favorite color</span>
                <div  onChange={handleChange}  className="radio-container">
                    <input className="pink" type="radio" id="pink" name="color" value="pink" defaultChecked></input>
                    <input className="orange" type="radio" id="orange" name="color" value="orange"></input>
                    <input className="yellow" type="radio" id="yellow" name="color" value="yellow"></input>
                    <input className="green" type="radio" id="green" name="color" value="green"></input>
                    <input className="blue" type="radio" id="blue" name="color" value="blue"></input>
                    <input className="purple" type="radio" id="purple" name="color" value="purple"></input>
                </div>
                <button type="submit" className="btn-register">CONTINUE</button>
            </form>
        </div>
    )
}

export default Register;