import { forwardRef, useState } from "react";

// eslint-disable-next-line react/display-name
const UseRefChild = forwardRef((props, ref) => {
  const [numberChild, setNumberChild] = useState(1);

  ref.current.setNumberChild = () => {
    setNumberChild((state) => state + 1);
  };
  console.log("child render");

  return (
    <div className="bg-secondary text-white mt-3">
      <button
        className="btn btn-primary"
        onClick={() => setNumberChild((state) => state + 1)}
      >
        {numberChild}
      </button>
    </div>
  );
});

export default UseRefChild;
