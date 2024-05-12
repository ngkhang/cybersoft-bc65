import { useCallback, useState, memo } from "react";

const ChildUseCallback = memo(function ChildUseCallback(props) {
  console.log("child render");
  return (
    <div className="bg-dark text-white p-2 mt-2">
      {/* 👇Using without useCallBack */}
      {/* {props.like} */}

      {/* 👇Using withuseCallBack */}
      {props.renderLike()}
    </div>
  );
});

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const renderLike = () => {
    return <i className="fa fa-heart">{like}</i>;
  };

  // Cache lại giá trị mới của hàm. Khi có 1 deps thay đổi, useCallback tạo lại 1 hàm mới
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container">
      <h3>useCallback</h3>

      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        {number}
      </button>
      <button className="btn btn-danger" onClick={() => setLike(like + 1)}>
        Like
      </button>

      {/* 👇Using without useCallBack */}
      {/* <ChildUseCallback like={like} /> */}

      {/* 👇Using with useCallBack */}
      <ChildUseCallback renderLike={callBackRenderLike} />
    </div>
  );
};

export default UseCallback;
