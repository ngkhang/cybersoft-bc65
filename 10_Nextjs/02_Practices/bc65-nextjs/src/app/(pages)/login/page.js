'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  // Hook chuyển hướng trang trong Next.js
  const router = useRouter();

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    console.log(1);
    e.preventDefault();
    if (userLogin.email === 'abc@gmail.com' && userLogin.password === '123')
      router.push('/profile')
    else {
      alert('Sai mật khẩu');
      router.push('/login');
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input onInput={handleChange} name="email" className="form-control" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
          <small id="emailHelpId" className="form-text text-muted">Help text</small>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input onInput={handleChange} name="password" className="form-control" id="password" aria-describedby="passwordHelpId" placeholder="********" />
          <small id="passwordHelpId" className="form-text text-muted">Help text</small>
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login;
