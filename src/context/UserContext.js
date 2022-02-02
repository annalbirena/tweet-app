import { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [googleUser, setGoogleUser] = useState();
    const [user, setUser] = useState();
    const [userB, setUserB] = useState({});
    const [userRegistred, setUserRegistred] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usersList, setUsersList] = useState([]);

    return (
        <UserContext.Provider 
            value={{ 
                googleUser, 
                setGoogleUser, 
                user, 
                setUser, 
                loading, 
                setLoading, 
                userRegistred, 
                setUserRegistred, 
                usersList, 
                setUsersList, 
                userB, 
                setUserB }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;