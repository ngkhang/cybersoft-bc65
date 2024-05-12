const HandleEvent = () => {
  const handleCallback = (e) => {
    e.target.className = "btn btn-light";
    e.target.innerHTML = "Handle Event with Callback clicked";
  };

  const handleCallbackArgwithBind = (content, e) => {
    console.log(content);
  };
  
  const handleCallbackArg = (content) => {
    console.log(content);
  };

  return (
    <div className="container">
      <h1 className='text-center mb-4'>Section 02: Handle Event</h1>
      {/* Handle Event with Arrow function */}
      <button
        onClick={() => {
          console.log("Arrow function");
        }}
        className="btn btn-dark"
      >
        Handle Event with Arrow function
      </button>

      {/* Handle Event with Callback */}
      <button onClick={handleCallback} className="btn btn-secondary">
        Handle Event with Callback
      </button>

      {/* Passing Arguments */}
      <button
        onClick={handleCallbackArgwithBind.bind(this, "Passing Arguments with Bind method")}
        className="btn btn-success"
      >
        Passing Arguments with Bind method
      </button>
      <button
        onClick={() => handleCallbackArg("Passing Arguments with Callback")}
        className="btn btn-success"
      >
        Passing Arguments with Callback
      </button>
    </div>
  );
};

export default HandleEvent;
