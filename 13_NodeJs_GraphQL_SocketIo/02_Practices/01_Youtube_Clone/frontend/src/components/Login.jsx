import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginApi } from '../utils/fetchFromAPI';

const handleLogin = () => {
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#pass').value;

  loginApi({ email, password })
    .then((result) => {
      alert('Đăng nhập thành công');

      // Lưu localStorage
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
}

const Login = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {

  }, []);

  return <div className="p-5 " style={{ minHeight: "100vh" }}>
    <div className=" d-flex justify-content-center">
      <form className="row g-3 text-white">
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Password</label>
          <input className="form-control" id="pass" />
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook} />
      </form>
    </div>
  </div>
};

export default Login;
