// import React from 'react'
import PropTypes from 'prop-types';

function ProductItem(props) {
  const {prod} = props;
  return (
    <div className="card h-100">
      <img className="card-img-top" src={prod.image} alt="..." />
      <div className="card-body">
        <h4 className="card-title">{prod.name}</h4>
        <p className="card-text">{prod.price}</p>
        <p className="card-text">{prod.description}</p>
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
