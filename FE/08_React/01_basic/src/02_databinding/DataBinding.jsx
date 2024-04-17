const DataBinding = () => {
  // Primitive value
  const fullName = "Khang Nguyen";

  // Reference value
  const prod = {
    id: 1,
    name: "product 1",
    price: 1000,
    img: "https://i.pravatar.cc?u=18",
  };

  // Function
  const Card = () => {
    return (
      <>
        <div class="card">
          <img class="card-img-top" src={prod.img} alt={prod.name} />
          <div class="card-body">
            <h4 class="card-title">{prod.name}</h4>
            <p class="card-text">{prod.price}</p>
            <button className="btn btn-dark">Detail</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container text-center">
      <h1 className='text-center mb-4'>Section 02: Data Binding</h1>

      <span className="badge bg-success mb-2">{fullName}</span>

      <div className="row">
        <div className='col-3'>
          {Card()}
        </div>
        <div className='col-3'>
          {Card()}
        </div>
        <div className='col-3'>
          {Card()}
        </div>
        <div className='col-3'>
          {Card()}
        </div>
      </div>
    </div>
  );
};

export default DataBinding;
