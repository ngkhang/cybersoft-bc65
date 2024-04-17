import { useState } from "react";

const State = () => {
  const [state, setState] = useState(0);

  const [fSize, setFontSize] = useState(14);

  const handleClick = (value, action) => {
    let newValue = action === "add" ? state + value : state - value;
    setState(newValue);
  };

  const handleZoom = (value, action) => {
    let newValue = action === "add" ? fSize + value : fSize - value;
    setFontSize(newValue);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Section 04: State</h1>
      <div className="row">
        <div className="col-6 px-4">
          <h3>
            Count: <span className="text-danger">{state}</span>
          </h3>
          <div className="container">
            <div className="row justify-content-between">
              <button
                className="btn btn-danger col-5"
                onClick={() => handleClick(1, "sub")}
              >
                -
              </button>
              <button
                className="btn btn-primary col-5"
                onClick={() => handleClick(1, "add")}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 px-4">
          <div className="container">
            <div className="row justify-content-between">
              <button
                onClick={() => handleZoom(1, "add")}
                className="btn btn-success col-5"
              >
                zoom in
              </button>
              <button
                onClick={() => handleZoom(1, "sub")}
                className="btn btn-success col-5"
              >
                zoom out
              </button>
            </div>
            <p style={{ fontSize: fSize }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
