import { Outlet } from 'react-router-dom';
import FooterHome from '../components/FooterHome/FooterHome';
import HeaderHome from '../components/HeaderHome/HeaderHome';

const DefaultTemplate = () => {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <div className="container">
        <HeaderHome/>
      </div>

      <div className='container flex-grow-1'>
          <Outlet/>
      </div>
      <FooterHome/>
    </div>
  )
}

export default DefaultTemplate;
