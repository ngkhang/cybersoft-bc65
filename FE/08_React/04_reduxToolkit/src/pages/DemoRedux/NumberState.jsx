import { useDispatch, useSelector } from "react-redux";
import { TYPE } from "../../redux/action";

const NumberState = () => {
  const { number, fontSize } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleLike = () => {
    const action = {
      type: TYPE.LIKE_NUMBER,
      payload: number + 1,
    };
    dispatch(action);
  };
  const handleFontSize = (key) => {
    let newFontSize;
    switch (key) {
      case "UP":
        newFontSize = fontSize + 2;
        break;

      default:
        newFontSize = fontSize - 2;
        break;
    }

    const action = {
      type: TYPE.FONT_NUMBER,
      payload: newFontSize,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3 className="my-3 text-center">Demo Redux</h3>
      <div className="row bg-light py-4">
        <div className="col-4">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center fs-2">
              <h3 className="me-2">{number} </h3>
              <span>
                <i className="fa fa-heart text-danger"></i>
              </span>
            </div>
            <div className="card-body text-center">
              <button className="btn btn-danger" onClick={() => handleLike()}>
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header">
              <p style={{ fontSize: fontSize }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="card-body d-flex justify-content-center align-align-items-center">
              <button
                className="btn btn-primary py-2 px-4 mx-2"
                onClick={() => handleFontSize("UP")}
              >
                +
              </button>
              <button
                className="btn btn-secondary py-2 px-4 mx-2"
                onClick={() => handleFontSize("DOWN")}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberState;
