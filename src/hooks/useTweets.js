import { getRefCollection } from "../firebase/config";
import { addDoc, getDocs, query, where, doc, deleteDoc, updateDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useContext } from "react";
import { TweetsContext } from "../context/TweetContext";
import { initialTweetToDelete } from "../assets/scripts/constant";
import { useLocation } from "react-router-dom";

const useTweets = () => {
  const location = useLocation();
  const { setTweetsList, setLoadingTweets, setTweetsUserList, setShowDeleteAlert, setTweetToDelete } = useContext(TweetsContext);

  //Hook para obtener tweets de un especifico usuario
  const getUserTweets = async (uid) => {
    try {
      const q = query(getRefCollection("tweets"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      const tweetsColletion =
        querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        });
      //Finalizar Loader
      setLoadingTweets(false);
      //Actualizar lista de tweets
      setTweetsUserList(tweetsColletion);
    } catch (e) {
      console.log(e);
    }
  }

  //Hook para obtener todos los tweets
  const getAllTweets = async () => {
    try {
      const querySnapshot = await getDocs(getRefCollection("tweets"));
      const tweetsColletion =
        querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      //Finalizar Loader
      setLoadingTweets(false);
      //Actualizar lista de tweets
      setTweetsList(tweetsColletion);
    } catch (e) {
      console.log(e);
    }
  }

  //Hook para agregar tweet
  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(getRefCollection("tweets"), tweetObject);
      await getAllTweets();
    } catch (e) {
      console.error("Error adding tweet: ", e);
    }
  }

  //Hook para borrar tweet
  const deleteTweet = async (id, uid) => {
    try {
      const docRef = doc(getRefCollection("tweets"), id)
      await deleteDoc(docRef);
      //Actualizar lista de tweets
      await getAllTweets();
      await getUserTweets(uid);
      //Cerrar DeleteAlert e inicializar datos
      setShowDeleteAlert(false);
      setTweetToDelete(initialTweetToDelete);
    } catch (e) {
      console.log(e);
    }
  }

  //Hook para agregar likes
  const addLikes = async (id, uid, userbUID) => {
    try {
      const docRef = doc(getRefCollection("tweets"), id);
      //Obtener la informacion del documento
      const docSnap = await getDoc(docRef);
      const tweetLikes = docSnap.data().userLikes;
      //Agregar likes si el usuario no existe en el arreglo de likes y retirar si ya existe 
      if (tweetLikes.includes(uid)) {
        await updateDoc(docRef, {
          userLikes: arrayRemove(uid),
          likes: docSnap.data().likes - 1,
        })
      } else {
        await updateDoc(docRef, {
          userLikes: arrayUnion(uid),
          likes: docSnap.data().likes + 1,
        })
      }
      await getAllTweets();
      //Si la ruta es de Usuario B entonces se obtienen los tweets del usuario B
      //De lo contrario se obtienen los tweets del usuario logueado
      location.pathname === "/profile-user-B" ? await getUserTweets(userbUID) : await getUserTweets(uid)
    } catch (e) {
      console.log(e);
    }
  }

  return { addNewTweet, getAllTweets, getUserTweets, deleteTweet, addLikes }
}

export default useTweets;