import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="my-5">
        <h1><span className="text-danger">OUR</span> <span style={{ color: "#007498" }}>SERVICES</span></h1>
        <p className="text-secondary col-lg-6 col-sm-6 col-8 m-auto">
          We provided major 6 services. Without these we have also other sevices that we provide online.
        </p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
          {services.map((service) => (
            <div key={service.id} className="col">
              <div className="card h-100">
                <img src={service.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{service.name}</h4>
                  <p style={{ textAlign: "justify" }} className="card-text text-secondary">
                    {service.description}
                  </p>
                </div>
                  <div className="card-footer">
                  <Link to={`/service/${service.id}`}><button className="btn btn-outline-secondary">DETAILS</button></Link>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
