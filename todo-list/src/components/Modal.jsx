import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { dateFormat } from "../helper";
import TaskForm from "./TaskForm";

function Modal(props) {
  const { type, data } = props;
  const { deleteTask, message, getTaskList } = useContext(TodoContext);

  const onDelete = () => {
    deleteTask(data.id);
    getTaskList();
  };

  return (
    <div className="modal" tabIndex="-1" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {type === "view" ? (
              <div className="card">
                <h5>{data?.title}</h5>
                <p>{data?.description}</p>
                <div className="d-flex justify-content-between">
                  <p>Created on {dateFormat(data?.createdOn)}</p>
                  <p>Due Date {dateFormat(data?.duedate)}</p>
                </div>
              </div>
            ) : type === "edit" ? (
              <TaskForm taskInfo={data} isUpdate={true} isModal={true} />
            ) : (
              <div className="py-2">
                <p>Do you want to delete this task?</p>

                <div className="btn btn-white" onClick={onDelete}>
                  Yes
                </div>
                <div data-bs-dismiss="modal" className="btn btn-white">
                  No
                </div>
                <div className={message.class} role="alert">
                  {message.text}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
