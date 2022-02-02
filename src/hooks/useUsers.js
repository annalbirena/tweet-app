import { getRefCollection } from "../firebase/config";
import { addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const { setLoading, userRegistred, setUserRegistred, setUsersList, setGoogleUser } = useContext(UserContext);
  const navigate = useNavigate();

  //Hook para obtener usuarios
  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(getRefCollection("users"));
      const usersCollection =
        querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
          }
        })
      setUsersList(usersCollection);
    } catch (e) {
      console.log(e);
    }
  }

  //Hook para agregar usuario
  const addNewUser = async (userObject) => {
    try {
      const docRef = await addDoc(getRefCollection("users"), userObject);
      setLoading(false);
      //Si se agrega un nuevo usuario la respuesta es true y esto da paso a que se ejecute la redireccion en el useEffect
      docRef && setUserRegistred(true);
      await getAllUsers();
      setGoogleUser(); //Reset Google User luego de haberse registrado en Firestore
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  }

  //Useffect que redirige al Feed de Tweets si el usuario se registro correctamente en Firebase
  useEffect(() => {
    if (userRegistred) {
      navigate("/feed", { replace: true });
      setUserRegistred(false); //Reset el estado de usuario Registrado
    }
  }, [userRegistred])

  return { addNewUser, getAllUsers };
}

export default useUsers;