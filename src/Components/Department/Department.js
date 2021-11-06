import React, { useEffect, useState } from "react";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch("/departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <div className="mt-3" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="col-lg-5">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
            style={{ width: "90%" }}
            alt=""
          />
        </div>
        <div className="container col-lg-7 mt-4">
        {departments.length === 0 ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mx-2">
              {departments.map((department) => (
                <div key={department.id} className="col">
                  <div className="card h-100">
                    <img
                      src={department.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{department.name}</h5>
                      <p style={{ textAlign: "justify" }} className="card-text">
                        {department.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Department;
