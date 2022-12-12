import React, { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="userName"
          onChange={handleChange}
          name="UserName"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          name="password"
        />
      </div>

      <button type="submit" className="btn btn-dark rounded-0">
        Register
      </button>
    </form>
  );
}

export default Register;
