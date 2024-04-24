import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    let isSuccess =
      userLogin.email === "cybersoft" && userLogin.password === "123";
    navigate(isSuccess ? "/user/profile" : "/forgot");
  };

  return (
    <div className="container">
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          {/* <button type='submit' className='btn btn-secondary w-50'>Forgot</button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
