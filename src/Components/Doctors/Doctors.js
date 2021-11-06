import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="conotainer">
      <div className="my-5">
        <h1>
          <span className="text-danger">MEET OUR TEAM OF</span>{" "}
          <span style={{ color: "#007498" }}>EXPERIENCED DOCTORS</span>
        </h1>
        <p className="text-secondary col-lg-6 col-sm-6 col-8 m-auto">
          We are a multidisciplinary team of doctors, nurses and administrators.
          Together we aim to provide you with comprehensive healthcare that is
          tailored to your.
        </p>
      </div>
      {doctors.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row g-3 mb-5">
            {doctors.slice(0, 2).map((doctor) => (
              <div key={doctor.id} className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-8 m-auto">
                    <img
                      className="img-fluid"
                      style={{ borderRadius: "5px" }}
                      src={doctor.image}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-8 m-auto text-start">
                    <h3 className="mt-2">{doctor.name}</h3>
                    <p className="text-danger">{doctor.position}</p>
                    <h6>{doctor.study}</h6>
                    <div className="d-flex">
                      <i className="fa fa-phone-alt"></i>
                      <p>{doctor.phone}</p>
                    </div>{" "}
                    <br />
                    <Link to={`/doctor/${doctor.id}`}>
                      <button className="btn btn-outline-secondary">
                        DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="mt-5">
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 g-4">
              {doctors.slice(2, 8).map((doctor) => (
                <div key={doctor.id} className="col single-doctor">
                  <div className="card h-100">
                    <img
                      src={doctor.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{doctor.name}</h5>
                      <p className="card-text text-danger">{doctor.position}</p>
                    </div>
                    <div className="card-footer">
                      <Link to={`/doctor/${doctor.id}`}>
                        <button className="btn btn-outline-secondary">
                          DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* container  */}
    </div>
  );
};

export default Doctors;
