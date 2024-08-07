import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";``
import { store } from './redux/store';

import DefaultTemplate from './template/DefaultTemplate';
import './assets/scss/index.scss'

import Home from "./pages/Home";
import Page404 from './pages/Page404';
import NumberState from './pages/DemoRedux/NumberState';
import ChatApp from './pages/ChatApp/ChatApp';
import CartMainPage from './pages/CartStore/CartMainPage';

import StudentPage from './pages/Students/StudentPage';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<DefaultTemplate />} >
            <Route index element={<Home />} />
            <Route path='redux-basic' element={<NumberState />} />
            <Route path='chat-app' element={<ChatApp />} />
            <Route path='cart-store' element={<CartMainPage />} />
            <Route path='students' element={<StudentPage />} />
          </Route>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
