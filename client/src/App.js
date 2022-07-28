import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import './App.css';
import { HomePage, NotFoundPage, PostForm, 
  HomePart, Profile, PostFormEdit, CompoHomePre, CompoHomeVen, Apiexterna } from "./pages";



// <Route path="/postform/:id" element={<PostFormEdit/>} />
// <Route path="/posts/:id" element={<HomePart/>} />

function App() {

  

  return (
     <div >
       <PostProvider>
        
            <div className="appback">
            <Routes>
            <Route exact path="/" element={<HomePage/>} />
            
            <Route path="/new" element={<PostForm/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/posts/:id" element={<HomePart/>} />
            <Route path='/users' element={<Profile/>} />    
            <Route path='/api' element={<Apiexterna/>} />                    
            <Route path='/edit/posts/:id' element={<PostFormEdit/>} />
            <Route path='/posts/pre' element={<CompoHomePre/>} /> 
            <Route path='/posts/ven' element={<CompoHomeVen/>} /> 
            

            
                
            

            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          </div>
          
        </PostProvider>
      </div>
 );
}

export default App;
