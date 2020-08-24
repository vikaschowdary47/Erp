import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__body">
      <Link to="/login">
        <button className="btn btn-primary" type="button">
          Login
        </button>
      </Link>
      <p>or</p>
      <Link to="/signup">
        <button className="btn btn-primary" type="button">
          SignUp
        </button>
      </Link>
    </div>
  );
};

export default Home;
