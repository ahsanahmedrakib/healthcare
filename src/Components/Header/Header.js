import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-fixed navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://i.ibb.co/HdYzK5y/logo.jpg"
              width="40"
              height="40"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-nav">
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "red",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "red",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/department"
                >
                  DEPARTMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "red",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/doctors"
                >
                  DOCTORS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "red",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/appoinment"
                >
                  APPOINMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "red",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            {user.email ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item user-name">{user.displayName}</li>
                <li className="nav-item"><button onClick={logOut} className="my-button">LOG OUT</button></li>
                </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "red",
                    }}
                    className="nav-link active"
                    aria-current="page"
                    exact
                    to="/login"
                  >
                    LOGIN
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
