import { Roboto } from "next/font/google";
import Image from 'next/image';
import styles from "./page.module.css";
import Link from 'next/link';

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '500', '900'] });

// API Routes để tự viết api hoặc call api thông qua back-end khác
// Option 1: Sử dụng API Router
// import axios from 'axios';
// const getProductApi = async () => {
//   const res = await axios.get('http://localhost:3000/api/products');
//   return res.data.content;
// }

// Case 2: Server Action
import { getProductApi } from './server/action/product';

const Home = async () => {
  const lstProduct = await getProductApi();

  return (
    <main className={styles.main}>
      <h1 className={roboto.className}>Home Page</h1>
      <div className="container">
        <div className="row">
          {
            lstProduct?.map((prod) => {
              return (
                <div key={prod.id} className="col-3 mb-3">
                  <div className="card">
                    <Image crossOrigin='anonymous' className="card-img-top img-fluid" src={prod.image} width={100} height={100} alt="..." quality={75} />
                    <div className="card-body">
                      <h4 className="card-title">{prod.name}</h4>
                      <p className="card-text">{prod.price}</p>
                      <Link className='btn btn-secondary' href={`/detail/${prod.id}`}>View Detail</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </main>
  );
}

export default Home;
