import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { UserProvider } from "./context/userContext";
import './App.css';
// import { LoginButton } from "./components/LoginButton";
// import { Profile } from "./components/Profile";
// import { LogoutButton } from "./components/LogoutButton";
// import {useAuth0} from '@auth0/auth0-react';

import { HomePage, NotFoundPage, PostForm, HomePart} from "./pages";
import { UsersPage} from "./pages/UsersPage";
import { UserForm} from "./pages/UserForm";


function App() {

  return (
     <div >
       <PostProvider>
        <UserProvider>
            <div>
            <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/new" element={<PostForm/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/posts/:id" element={<HomePart/>} />
            <Route path='/users' element={<UsersPage/>} />
            <Route path='/users/new' element={<UserForm/>} />

            
            

            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          </div>
          </UserProvider>
        </PostProvider>
      </div>
 );
}

export default App;
