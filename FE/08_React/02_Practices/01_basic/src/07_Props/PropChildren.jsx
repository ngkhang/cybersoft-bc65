const PropChildren = (props) => {
  return (
    <div className="container bg-light">
      <h5 className="text-primary">Children</h5>
      {props.children}
    </div>
  );
};

export default PropChildren;
