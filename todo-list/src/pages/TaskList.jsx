import React from "react";
import { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import TodoContext from "../context/TodoContext";
import Modal from "../components/Modal";

//initial state for reducer
const init = {
  type: "",
  data: null,
};

//created a reducer function here, dispatch will use this function, match the recieved data with the state and send the payload accordingly
function reducer(state, action) {
  switch (action.type) {
    case "edit":
      return { type: "edit", data: action.payload };
    case "view":
      return { type: "view", data: action.payload };
    case "delete":
      return { type: "delete", data: action.payload };
    default:
      return state;
  }
}

function TaskList(props) {
  const [state, dispatch] = useReducer(reducer, init);

  const { taskList, getTaskList, loggedUser } = useContext(TodoContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (loggedUser) {
      getTaskList();
    }
  }, []);
  let filteredTask = taskList.filter((task) => {
    return task.title?.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
  });

  const onSearch = (e) => {
    let str = e.target.value;
    setSearchText(str);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <div className="mb-dark text-white mb-1">search</div>
          <input type="text" className="form-control" onChange={onSearch} />
        </div>
        <div className="table table-dark">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTask?.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.title}</td>
                    <td>{item?.description}</td>
                    <td className="my-2">
                      <span
                        className="mx-2"
                        onClick={() => {
                          dispatch({ type: "view", payload: item });
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </span>
                      <span className="mx-2">
                        <i
                          className="fa-solid fa-pen-to-square"
                          onClick={() => {
                            dispatch({ type: "edit", payload: item });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        ></i>
                      </span>
                      <span className="mx-2">
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => {
                            dispatch({ type: "delete", payload: item });
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        ></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal type={state.type} data={state.data} />
    </div>
  );
}

export default TaskList;
