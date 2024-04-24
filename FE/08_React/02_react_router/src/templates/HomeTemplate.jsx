import React from 'react'
import HeaderHome from '../components/HeaderHome/HeaderHome';
import FooterHome from '../components/FooterHome/FooterHome';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome/>
        <div className="content" style={{minHeight: 650}}>
          <Outlet/>
        </div>
      <FooterHome/>
    </>
  )
}

export default HomeTemplate;
