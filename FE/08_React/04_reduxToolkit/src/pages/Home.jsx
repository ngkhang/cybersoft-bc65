import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Redux Toolkit</h1>
      <ul className="fs-5">
        <li>
          <Link className="text-decoration-none" to={"demo-redux"}>
            Demo reudx
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to={"chat-app"}>
            Chat App
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
