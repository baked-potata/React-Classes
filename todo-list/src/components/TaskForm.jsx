import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoContext from "../context/TodoContext";
import { dateFormat } from "../helper/";

function TaskForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duedate: "",
  });

  const { loggedUser, insertTask, message, setMessage } =
    useContext(TodoContext);
  const myDate = new Date();

  const onSubmit = (e) => {
    e.preventDefault();
    insertTask(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      userId: loggedUser.user.id,
      createdOn: myDate,
    }));
  };
  return (
    <>
      <div className="card text-primary d-flex p-0 task-form rounded-0 border-0">
        <div className="text-start card-header bg-dark text-white w-100 display-6 ps-0 rounded-0 ">
          Create Task
        </div>
        <div className="card-body p-5">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="text-dark" htmlFor="task-title">
                Title
              </label>
              <input
                type="text"
                id="task-title"
                name="title"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="text-dark" htmlFor="task-desc">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                id="task-desc"
                cols="20"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="text-dark" htmlFor="task-duedate">
                Date
              </label>
              <input
                type="datetime-local"
                min="2022-06-07T00:00"
                max="2024-06-14T00:00"
                className="form-control"
                id="task-duedate"
                name="duedate"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-dark rounded-0">Create Task</button>
            </div>
            {message.text.length > 0 && (
              <div className={message.class} role="alert">
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
