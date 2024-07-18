import React from "react";
import Image from "next/image";
import { getProductApi, getProductById } from "@/app/server/action/product";
import Link from 'next/link';

// Using with SSR
// Build hết dữ liệu cho tất cả sản phẩm của trang chi tiết
export async function generateStaticParams() {
  // lấy tất cả product để gọi getById API cache server
  const res = await getProductApi();
  return res.map((item) => { id: item.id });
}

const Detail = async (props) => {
  const { id } = props.params;
  const product = await getProductById(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Image
            crossOrigin="anonymous"
            width={100}
            height={100}
            className="img-fluid w-100"
            quality={100}
            src={product.image}
          />
        </div>
        <div className="col-8">
          <h3 className="text-uppercase">{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <div>
            {product.size.map((item) => {
              return (
                <span key={item} className="btn btn-dark me-2">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <h3>Relative Products</h3>
      <div className="row">
        {
          product.relatedProducts.map((prod) => {
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
  );
};

export default Detail;
