import React from 'react'
import HeaderHome from '../components/HeaderHome/HeaderHome';
import FooterHome from '../components/FooterHome/FooterHome';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <>
      <div className='bg-light shadow'>
        <div className='container'>
          <HeaderHome/>
        </div>
      </div>
        <div className="container" style={{minHeight: 650}}>
          <Outlet/>
        </div>
      <FooterHome/>
    </>
  )
}

export default HomeTemplate;
