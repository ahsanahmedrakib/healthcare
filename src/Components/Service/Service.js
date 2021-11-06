import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [data, setData] = useState({});

  // get all service
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((d) => setService(d));
  }, [id]);

  // find a single service
  useEffect(() => {
    const singleService = service.find((s) => s?.id === id);
    setData(singleService);
  }, [service]);

  return (
    <div className="container col-lg-7 m-auto mt-3">
      <div class="card">
        <img src={data?.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{data?.name}</h3>
          <p class="card-text">{data?.description}</p>
          <Link to="/" class="btn btn-secondary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
