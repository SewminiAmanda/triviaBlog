
import './App.css';

import React, { useContext } from "react";
import {Navbar} from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import {Home} from './Pages/Home/Home';
import {Resources} from './Pages/Resources/Resources';
import {Writepost} from './Pages/Resources/Writepost';
import {Sensors} from './Pages/Resources/Sensors/Sensors';
import {MotionSen} from './Pages/Resources/Sensors/MotionSen';
import {Projects} from './Pages/Projects/Projects';
import {Blogs} from './Pages/Blogs/Blogs';
import {Shopping} from './Pages/Shopping/Shopping';
import {Forum} from './Pages/Forum/Forum';
import {AboutUs} from './Pages/AboutUs/AboutUs';
import { Footer } from './Component/Footer/Footer';
import {Shoppingpost} from './Pages/Shopping/Shoppingpost';
import SignUp from './Pages/LogIn/SignUp';
import Login from './Pages/LogIn/LogIn';
import {WriteBlog} from './Pages/Blogs/WriteBlog';
import {InsidePost} from './Pages/Blogs/InsidePost';
import {UpdateBlog} from './Pages/Blogs/UpdateBlog';
import MySaves from './Pages/Profile/MySaves';
import MyCollections from "./Pages/Profile/MyCollections";
import MyQuestions from './Pages/Profile/MyQuestions';
import EditProfile from './Pages/Profile/EditProfile';
import ForgotPassword from './Pages/LogIn/ForgotPassword';
import AuthorPage from './Pages/Blogs/AuthorPage';


import Productdescription from './Pages/Shopping/Productdescription';
import {UserContextProvider} from './Context/UserContext';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <UserContextProvider>
      <Navbar/>
      
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/resources'element={<Resources/>}/>
          {/* <Route path='/writepost'element={<Writepost/>}/> */}
          <Route path='/sensors'element={<Sensors/>}/>
          <Route path='/MotionSen'element={<MotionSen/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/blogs'element={<Blogs/>}/>
          <Route path='/shopping'element={<Shopping/>}/>
          <Route path='/forum'element={<Forum/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/shoppingpost' element={<Shoppingpost/>}/>
          <Route path='/WriteBlog' element={<WriteBlog/>}/>
          <Route path='/insidePost/:id' element={<InsidePost/>}/>
          <Route path='/authorpage/:id' element={<AuthorPage/>}/>
          <Route path='/UpdateBlog/:id' element={<UpdateBlog/>}/>
          <Route path='/MySaves' element={<MySaves/>}/>
          <Route path='/MyCollections' element={<MyCollections/>}/>
          <Route path='/MyQuestions' element={<MyQuestions/>}/>
          <Route path='/EditProfile' element={<EditProfile/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/productdescription' element={<Productdescription/>}/>

          <Route path='/' element={<Navigate to="/home" />}/>
          
      </Routes>
      
      <Footer/>
      </UserContextProvider>
      </BrowserRouter>
      
      

    </div>
  );
}


export default App;
