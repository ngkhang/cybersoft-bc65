import React, { useState } from "react";
import Cart from "./Cart";
import ProductListItem from "./ProductListItem";

const ExCart = () => {
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
      id: 4,
      name: "Steel car",
      img: "./img/steel-car.jpg",
      price: 4000,
    },
  ];

  const [arrProductCart, setArrProductCart] = useState([]);

  const handleAddToCart = (prod) => {
    const prodCart = { ...prod, quantity: 1 };

    let prodIncart = arrProductCart.find((item) => item.id === prod.id);

    if (prodIncart) prodIncart.quantity += 1;
    else arrProductCart.push(prodCart);

    setArrProductCart((state) => [...state]);
  };

  const delProd = (idProd) => {
    const newListProduct = arrProductCart.filter((item) => item.id !== idProd);
    setArrProductCart(newListProduct);
  };

  const handleQuantity = (idProd, action) => {
    const prod = arrProductCart.find((item) => item.id === idProd);

    if (action === "UP") prod.quantity += 1;
    else if (action === "DOWN" && prod.quantity > 1) prod.quantity -= 1;

    setArrProductCart((state) => [...state]);
  };

  return (
    <div className="container">
      <h3>Shopping Cart</h3>
      <Cart
        arrProductCart={arrProductCart}
        delProd={delProd}
        handleQuantity={handleQuantity}
      />
      <ProductListItem products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default ExCart;
