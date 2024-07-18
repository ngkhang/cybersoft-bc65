'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { storeAdmin } from '../redux/storeAdmin'

const AdminTemplate = ({ children }) => {
  return (
    <Provider store={storeAdmin}>
      <div className='d-flex' style={{ minHeight: '100vh' }}>
        <div className='w-25 bg-dark text-white'>
          Menu
        </div>
        <div className='content w-75 h-100'>
          {children}
        </div>
      </div>
    </Provider>
  )
}

export default AdminTemplate;
