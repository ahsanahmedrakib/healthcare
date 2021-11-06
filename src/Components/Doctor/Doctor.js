import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState([]);
  const [data, setData] = useState({});

  // get all doctors
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((d) => setDoctor(d));
  }, [id]);

  // find a single doctor
  useEffect(() => {
    const singleDoctor = doctor.find((s) => s?.id === id);
    setData(singleDoctor);
  }, [doctor]);

  return (
    <div className="container col-lg-4 col-md-8 m-auto mt-3">
      <div class="card">
        <img src={data?.image} class="card-img-top"  alt="..." />
        <div class="card-body">
          <h3 class="card-title">{data?.name}</h3>
          <p class="card-text">{data?.position}</p>
          <Link to="/doctors" class="btn btn-secondary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
