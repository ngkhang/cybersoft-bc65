import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { loginApi, loginFacebookAPI } from '../utils/fetchFromAPI';
import ReactFacebookLogin from "react-facebook-login";

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

const handleLoginFace = (response) => {
  let { id, name, email } = response;
  let newData = { faceAppId: id, fullName: name, email };

  loginFacebookAPI(newData)
    .then((result) => {
      alert(result.message);
      // Xử lý localStorage
    })
    .catch((error) => {
      // console.log(error)
      alert(error.response.data.message);
    })
}

const Login = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {

  }, []);

  const navigate = useNavigate();

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

          <a href="#" className=" text-primary" onClick={()=> navigate("/forget")}>
            Forget password
          </a>

        </div>
        <ReactFacebookLogin
          appId="1088597931155576"
          fields="name,email,picture"
          autoLoad={true}
          callback={(res) => handleLoginFace(res)}
          // onClick={componentClicked}
          />
      </form>
    </div>
  </div>
};

export default Login;
