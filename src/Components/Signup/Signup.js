import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { userName, userEmail, userPassword, createUserWithEmail, error } = useAuth();
  return (
    <div>
      <div className="container my-5">
        <img
          style={{ width: "20%" }}
          className="mb-3"
          src="https://i.ibb.co/z7YPVKy/logo-full.png"
          alt=""
        />
        <form className=" col-lg-5 col-md-6 p-3 m-auto border rounded">
          <h3 className="text-info mb-3">Sign Up</h3>
          {error && <span className="text-danger">{error.slice(9,50)}</span>}
          <input onChange={userName}
            className="form-control mt-3 mb-3"
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
          />
          <input onChange={userEmail}
            className="form-control mb-3"
            type="email"
            name=""
            id=""
            placeholder="Enter your e-mail"
          />
          <input onChange={userPassword}
            className="form-control mb-3"
            type="password"
            name=""
            id=""
            placeholder="Enter a password"
          />
          <button onClick={createUserWithEmail} className="btn btn-info text-light">Sign Up</button>
          <p className="mt-3 text-secondary">
            Already sign up?{" "}
            <Link to="/login">
              Log in
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
