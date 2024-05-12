import { useRef, useState } from "react";
import UseRefChild from "./UseRefChild";

const UseRef = () => {
  const [number, setNumber] = useState(1);
  const refContent = useRef("");
  const refComponent = useRef({});

  const handleComment = () => {
    console.log(refContent.current);
  };
  console.log("render UI");
  console.log(refContent.current);
  return (
    <div className="container">
      <h3>useRef()</h3>
      <div className="p-2 bg-secondary text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta
          inventore a et architecto magnam odit nemo necessitatibus eaque
          ducimus eum iure expedita officia quam assumenda, soluta quasi! Illo,
          similique.
        </p>
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={() => setNumber((state) => state + 1)}
      >
        {number}
      </button>
      <hr />
      <input
        name="content"
        onChange={(e) => (refContent.current = e.target.value)}
        type="text"
        className="w-25 form-control d-inline"
      />
      <button className="btn btn-success" onClick={() => handleComment()}>
        Comment
      </button>

      <hr />
      <button
        className="btn btn-warning"
        onClick={() => refComponent.current.setNumberChild()}
      >
        Button in Parent, Change number in Child
      </button>
      <UseRefChild ref={refComponent} />
    </div>
  );
};

export default UseRef;
