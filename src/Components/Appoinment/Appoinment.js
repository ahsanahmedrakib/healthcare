import React from "react";

const Appoinment = () => {
  // function written just for prevent loading
  const blockLoad = e => {
    e.preventDefault();
  }
  return (
    <div className="container">
      <div className="my-5">
        <h1>
          <span className="text-danger">MAKE AN</span>{" "}
          <span style={{ color: "#007498" }}>APPOINMENT</span>
        </h1>
        <p className="text-secondary col-lg-6 col-sm-6 col-8 m-auto">
          Make an appoinment to our hospital for that we will contact with you or your family members.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h3 className="text-secondary text-start">Servicing Hour</h3> <br />
          <div className="d-flex align-items-center">
            <div className="p-3">
              <i className="far fa-clock"></i>
            </div>
            <div>
              <p>
                {" "}
                Monday - Friday 08:00 - 21:00 <br /> Saturday &amp; Sunday -
                CLOSED
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="p-3">
              <i className="far fa-clock"></i>
            </div>
            <div>
              <p>
                {" "}
                Monday - Friday 08:00 - 21:00 <br /> Saturday &amp; Sunday -
                CLOSED
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="p-3">
              <i className="far fa-clock"></i>
            </div>
            <div>
              <p>
                {" "}
                Monday - Friday 08:00 - 21:00 <br /> Saturday &amp; Sunday -
                CLOSED
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 text-start">
          <div className="booking-form">
            <div className="form-header">
              <h3 className="text-secondary mb-4">Book an appoinment</h3>
            </div>
            <form className="border rounded p-3">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Patient Name
                    </label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="form-control"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  className="form-control"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="diseases" className="form-label">
                  Diseases
                </label>
                <input
                  id="diseases"
                  className="form-control"
                  type="text"
                  placeholder="Enter your diseases name"
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="birth-date" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      id="birth-date"
                      className="form-control"
                      type="date"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="a-date" className="form-label">
                      Appoinment Date
                    </label>
                    <input
                      id="a-date"
                      className="form-control"
                      type="date"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-btn mt-3">
                <button onClick={blockLoad} className="btn btn-secondary">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
