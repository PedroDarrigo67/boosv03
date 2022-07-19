import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { UserProvider } from "./context/userContext";
import './App.css';


import { HomePage, NotFoundPage, PostForm, HomePart, Profile, PostFormEdit, CompoHomePre, CompoHomeVen} from "./pages";

import { UserForm} from "./pages/user/UserForm";

// <Route path="/postform/:id" element={<PostFormEdit/>} />
// <Route path="/posts/:id" element={<HomePart/>} />

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
            <Route path='/users' element={<Profile/>} />
            <Route path='/users/new' element={<UserForm/>} />            
            <Route path='/edit/posts/:id' element={<PostFormEdit/>} />
            <Route path='/posts/pre' element={<CompoHomePre/>} /> 
            <Route path='/posts/ven' element={<CompoHomeVen/>} /> 

            
                
            

            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          </div>
          </UserProvider>
        </PostProvider>
      </div>
 );
}

export default App;
