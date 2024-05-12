import { useState } from "react";
import Modal from "./Modal";
import ProdList from "./ProdList";

const products = [
  {
    id: 1,
    name: "black car",
    img: "./img/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/silver-car.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Steel car",
    img: "./img/steel-car.jpg",
    price: 4000,
  },
];

const ExerciseCarStore = () => {
  const [productDetail, setProductDetail] = useState(products[0]);
  return (
    <div>
      <h1 className="text-center mb-4">Section 08: Exercise - Car Store</h1>
      <ProdList arrProd={products} setProductDetail={setProductDetail} />
      <Modal productDetail={productDetail} />
    </div>
  );
};

export default ExerciseCarStore;
