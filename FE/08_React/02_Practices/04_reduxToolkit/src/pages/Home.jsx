import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Redux Toolkit</h2>
      <ul className="fs-5">
        <li>
          <Link className="text-decoration-none" to={"redux-basic"}>
            Example 1: Redux Basic
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to={"chat-app"}>
          Example 2: Chat App
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to={"cart-store"}>
          Example 3: Cart
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to={"students"}>
          Example 4: Students (Redux Toolkit)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
