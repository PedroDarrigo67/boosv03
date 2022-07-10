import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { UserProvider } from "./context/userContext";
import './App.css';


import { HomePage, NotFoundPage, PostForm, HomePart} from "./pages";
import { UsersPage} from "./pages/user/UsersPage";
import { UserForm} from "./pages/user/UserForm";



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
