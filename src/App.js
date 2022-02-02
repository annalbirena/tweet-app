import './App.scss';
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutAuth from "./components/pages/Auth/LayoutAuth/LayoutAuth";
import Login from "./components/pages/Auth/Login/Login";
import Register from "./components/pages/Auth/Register/Register";
import Feed from "./components/pages/Feed/Feed";
import LayoutProfile from './components/pages/ProfileUser/LayoutProfile/LayoutProfile';
import ProfileFavorites from './components/pages/ProfileUser/Favorites/ProfileFavorites';
import ProfilePosts from './components/pages/ProfileUser/Posts/ProfilePosts';
import ProfileUserB from './components/pages/ProfileUserB/ProfileUserB';
import Loader from "./components/atoms/Loader/Loader";
import DeleteAlert from './components/molecules/DeleteAlert/DeleteAlert';
import { UserContext } from "./context/UserContext";
import { TweetsContext } from './context/TweetContext';

function App() {
  const { user,googleUser, loading } = useContext(UserContext);
  const { tweetToDelete, showDeleteAlert } = useContext(TweetsContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutAuth />} >
          <Route index element={<Login />} />.
          {googleUser && (
            <Route path="/register" element={loading ? <Loader /> : <Register />} />
          )} 
        </Route>
        {user && (
          <>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile-user" element={<LayoutProfile />} >
              <Route index element={<ProfilePosts />} />
              <Route path="/profile-user/posts" element={<ProfilePosts />} />
              <Route path="/profile-user/favorites" element={<ProfileFavorites />} />
            </Route>
            <Route path="/profile-user-B" element={<ProfileUserB />} />
          </>
        )}
        <Route path="*" element={!user && <Navigate to="/" />} />
      </Routes>
      {showDeleteAlert && <DeleteAlert id={tweetToDelete.id} uid={tweetToDelete.uid} />}
    </div>
  );
}

export default App;
