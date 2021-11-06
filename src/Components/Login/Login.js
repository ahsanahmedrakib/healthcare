/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {
    user,
    signInWithEmail,
    getUserEmail,
    getUserPassword,
    signInWithGoogle,
    error,
  } = useAuth();

  const histoty = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/";

  useEffect(() => {
    user?.email ? histoty.push(redirect) : "/";
  }, [user, histoty, redirect]);

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
          <h3 className="text-danger mb-3">Log In</h3>
          {error && <span className="text-danger">{error.slice(9,50)}</span>}
          <input
            onChange={getUserEmail}
            className="form-control mb-3 mt-3"
            type="email"
            name=""
            id=""
            placeholder="Enter your e-mail"
          />
          <input
            onChange={getUserPassword}
            className="form-control mb-3"
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button onClick={signInWithEmail} className="btn btn-danger">
            Log In
          </button>
          <p className="mt-3 text-info">or Log in with </p>
          <button onClick={signInWithGoogle} className="btn btn-secondary">
            Google
          </button>
          <p className="mt-3 text-info">
            New to medicare? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
