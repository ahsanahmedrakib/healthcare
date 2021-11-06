import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <img className="img-fluid mb-3" src="https://i.ibb.co/SyHhjHC/map.jpg" alt="" />
      <div>
        <h1>
          <span className="text-danger">DROP US A</span>{" "}
          <span style={{ color: "#007498" }}>MESSAGE</span>
        </h1>
        <p className="text-secondary col-lg-6 col-sm-6 col-8 m-auto">
        For all enquiries, please email us using the form below.
        </p>
        <div className="row mt-5">
            <div className="col-lg-8 m-auto">
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control mb-4" type="text" placeholder="Your Name" />
                        <input className="form-control mb-4" type="email" placeholder="Your Email" />
                        <input className="form-control mb-4" type="text" placeholder="Your Phone" />
                    </div>
                    <div className="col-md-6">
                        <textarea className="form-control" name="" id="" cols="20" rows="6" placeholder="Your Message"></textarea>
                    </div>
                </div>
                    <button className="btn btn-outline-secondary mt-2">SUMBIT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
