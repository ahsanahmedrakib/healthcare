import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mt-5 my-footer" style={{ backgroundColor: "#172538" }}>
      <div className="container py-3 text-light">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-start">
            <div>
              <NavLink to="/">
                <img
                  src="https://i.ibb.co/z7YPVKy/logo-full.png"
                  style={{ width: "150px", height: "100px" }}
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 text-start">
            <h5>LINKS</h5> <br />
            <div className="">
              <span className="d-block footer-link">
                <NavLink className="text-decoration-none" exact to="/">
                  HOME
                </NavLink>
              </span>
              <span className="d-block footer-link">
                <NavLink
                  className="text-decoration-none"
                  exact
                  to="/department"
                >
                  DEPARTMENT
                </NavLink>
              </span>
              <span className="d-block footer-link">
                <NavLink
                  className="text-decoration-none"
                  exact
                  to="/doctors"
                >
                  DOCTORS
                </NavLink>
              </span>
              <span className="d-block footer-link">
                <NavLink
                  className="text-decoration-none"
                  exact
                  to="/appoinment"
                >
                  APPOINMENT
                </NavLink>
              </span>
              <span className="d-block footer-link">
                <NavLink
                  className="text-decoration-none"
                  exact
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-5 text-start footer-services">
            <h5>SERVICES</h5> <br />
            <p>Emergency Services</p>
            <p>Qualified Doctors</p>
            <p>Outdoor Checkups</p>
            <p>24 Hour Service</p>
            <p>Ambulance Service</p>
            <p>Pharmacy</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-7 text-start footer-contact-text">
            <h5 className="text-light">CONTACT US</h5> <br />
            <p>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA</p>
            <h5>012-6532-568-9746</h5>
            <h5>012-6532-568-9746</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
