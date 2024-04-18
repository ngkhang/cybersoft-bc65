// import React from 'react'
import PropTypes from 'prop-types';

function ProductItem({prod}) {
  const {name, price, image, description} = prod;
  return (
    <div className="card h-100">
      <img className="card-img-top" src={image} alt="..." />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  prod: {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
  }
}

export default ProductItem;
