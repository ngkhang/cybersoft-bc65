import { memo, useMemo, useState } from "react";

const ChildUseMemo = memo(function ChildUseMemo(props) {
  console.log('render child')
  return (
    <div className="bg-dark text-white p-2 mt-2">{props.arr.toString()}</div>
  );
});

// Case 2: Define constant outside top component
// const arr = [1, 2, 3];

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const arr = [1, 2, 3];
  const memoArr = useMemo(() => arr, [arr]);

  return (
    <div className="container">
      <h3>Parent Component</h3>
      <button
        className="btn btn-dark"
        onClick={() => setNumber((state) => state + 1)}
      >
        {number}
      </button>

      {/* 👇Using without useCallBack */}
      {/* <ChildUseMemo arr={arr} /> */}
      {/* 👇Using with useCallBack */}
      <ChildUseMemo arr={memoArr} />
    </div>
  );
};

export default UseMemo;
