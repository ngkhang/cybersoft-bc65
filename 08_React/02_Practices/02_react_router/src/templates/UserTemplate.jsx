import React from 'react'
import { Outlet } from 'react-router-dom';

const UserTemplate = () => {
  return (
    <>
      <div className="container bg-success text-white p-3">
        <img src="../../public/vite.svg" alt="..." className="logo" />
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-4 dash-board bg-warning d-flex flex-column p-3">
            <img src="https://i.pravatar.cc?u=1" alt="..." className='img-fluid' />
            <nav>
              <ul>
                <li>menu item 1</li>
                <li>menu item 2</li>
                <li>menu item 3</li>
                <li>menu item 4</li>
              </ul>
            </nav>
          </div>
          <div className="col-8 content">
          <Outlet/>
        </div>
        </div>
      </div>
    </>
  )
}

export default UserTemplate;
