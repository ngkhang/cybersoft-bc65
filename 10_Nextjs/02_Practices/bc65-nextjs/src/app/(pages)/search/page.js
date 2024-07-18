import Image from 'next/image';
import Link from 'next/link';
import { getProductByKeyword } from '@/app/server/action/product';

const SearchPage = async (props) => {
  const { keyword } = props.searchParams;
  const arrProduct = await getProductByKeyword(keyword);

  return (
    <div className='container'>
      <h3>Search page </h3>
      <div className='form-group'>
        Kết quả tìm kiếm với từ khoá {keyword} - {arrProduct.length} kết quả
      </div>
      <div className='row'>
        {arrProduct?.map((item, index) => {
          return <div className="col-4 mt-2" key={index}>
            <div className='card'>
              <Image src={item.image} alt="..." width={200} height={200} style={{ width: '100%', height: 'auto' }} />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link className='btn btn-dark' href={`/detail/${item.id}`}>View detail</Link>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default SearchPage;
