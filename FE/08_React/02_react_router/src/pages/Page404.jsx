import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='h-25 w-50 border-2 bg-light shadow-lg rounded-2 p-4'>
        <h1 className='text-center fs-3'>404 Không tìm thấy nội dung</h1>
        <Link className='w-100 fs-5 text-decoration-none d-inline-block mt-4 text-center' to={''}>Quay về trang chủ</Link>
      </div>
    </div>
  )
}

export default Page404;
