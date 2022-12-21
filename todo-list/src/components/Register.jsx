import React, { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Register(props) {
  const [formData, setFormData] = useState({});
  const { registerUser, message } = useContext(TodoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          onChange={handleChange}
          name="UserName"
        />
      </div>
      <div className="mb-3">
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
      </div>{" "}
      <button type="submit" className="btn btn-dark rounded-0">
        Register
      </button>
      {message.text.length > 0 && (
        <div className={message.class} role="alert">
          {message.text}
        </div>
      )}
    </form>
  );
}

export default Register;
