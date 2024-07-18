'use client'

import React from 'react'
import Header from '../components/Header'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const HomeTemplate = ({ children }) => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {children}
      </div>
    </Provider>
  )
}

export default HomeTemplate;
