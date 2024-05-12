import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='container w-50 shadow rounded-1 p-4 text-center'>
        <h1 className='mb-5'>Page Not Found</h1>
        <Link className='fs-4 text-decoration-none text-dark' to={'/'}>Back to Home</Link>
      </div>
    </div>
  )
}

export default Page404;
