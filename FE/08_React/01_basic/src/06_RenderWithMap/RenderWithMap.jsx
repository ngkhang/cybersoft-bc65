const RenderWithMap = () => {
  const fakeData = [
    {
      id: 1,
      name: "prod 1",
      price: 100,
    },
    {
      id: 2,
      name: "prod 2",
      price: 200,
    },
    {
      id: 3,
      name: "prod 3",
      price: 300,
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-4">Section 06: Render with Map</h1>
      <p>Exmaple: Table</p>
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>Example: Card</p>
      <div className="container">
        <div className="row">
          {fakeData.map((prod) => {
            return (
              <div key={prod.id} className="col-3 card">
                <img
                  className="card-img-top"
                  src={`https://picsum.photos/id/${prod.id}/200`}
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">{prod.name}</h4>
                  <p className="card-text">{prod.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RenderWithMap;
