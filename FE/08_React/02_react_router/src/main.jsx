import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import Profile from './pages/Profile';
import HistoryOrder from './pages/HistoryOrder';
import ChangePassword from './pages/ChangePassword';
import Page404 from './pages/Page404';
import ForgotPass from './pages/ForgotPass';
import FormComponent from './pages/FormComponent/FormComponent';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='forgot' element={<ForgotPass/>}/>
          <Route path='register' element={<FormComponent/>}/>
        </Route>

        {/* User Template */}
        <Route path='user' element={<UserTemplate/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='history' element={<HistoryOrder/>}/>
          <Route path='change-password' element={<ChangePassword/>}/>
        </Route>

        {/* Handle 404 */}
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
