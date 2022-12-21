import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    class: "",
    text: "",
  });
  // a new state is created to make the login process go smoothly.
  // navigation will recieve this as a prop and also help while logging out
  const [loggedUser, setLoggedUser] = useState({
    user: {},
    userEmail: "",
    isLoggedIn: false,
  });

  const [taskList, setTaskList] = useState([]);

  // some basic understanding, registeruser is taking value from register component and sending it to json server.
  // data is sent via fetch() method, first parameter is the link to json file and second is the object containing method, header and body in stringified form
  // the function is asynchronus with each time taking part has to use await
  // json will send a response back to us which we have to convert back in to js object using .json() method. we can also use JSON.parse i guess, check on it
  // if everything goes soothly , json server will add an entry ibnto out json file.

  const registerUser = async (formData) => {
    const obj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const checkUser = await fetch(
      `http://localhost:5000/users?email=${formData.email}`,
      { method: "GET" }
    );

    const user = await checkUser.json();

    if (user.length > 0) {
      setMessage(() => ({
        text: "This user already Exists",
        class: "alert alert-warning mt-3",
      }));
    } else {
      const response = await fetch("http://localhost:5000/users", obj);
      if (response.ok) {
        setMessage(() => ({
          text: "Regsitered",
          class: "alert alert-info mt-3",
        }));
        setTimeout(() => {
          navigate("/login");
          setMessage({ class: "", text: "" });
        }, 3000);
      } else {
        setMessage(() => ({
          text: "Some Issue Occured",
          class: "alert alert-danger mt-3",
        }));
      }
    }
  };

  // as for the login function, data recieved from login component is sent to json server to match the email and password.
  // if we receive a result that means user exist and local storage will be updated by the  user email id. read about using tokens for loggin in.
  // the navigation component will later pull the email from local storage and set the state as required to display the name and logout funciton.

  const login = async (formData) => {
    const response = await fetch(
      `http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,
      { method: "GET" }
    );
    const user = await response.json();

    if (user.length > 0) {
      setMessage({
        text: "Logged In",
        class: "alert alert-info mt-3",
      });
      localStorage.setItem("user", user[0].email);
      // local storage updated with the email of current user.

      setLoggedUser((prev) => ({
        ...prev,
        user: user[0],
        userEmail: user[0].email,
        isLoggedIn: true,
      }));
      navigate("/create-task");
    } else {
      setMessage({
        text: "Check email/password",
        class: "alert alert-danger mt-3",
      });
    }
  };

  const insertTask = async (formData) => {
    const obj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch("http://localhost:5000/tasks", obj);
      if (response.ok) {
        setMessage({
          text: "Task created",
          class: "alert alert-info mt-3",
        });
        getTaskList();
      } else {
        setMessage({
          text: "Some error occured",
          class: "alert alert-danger mt-3",
        });
      }
    } catch (err) {}
  };

  const getTaskList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/tasks?UserId=${loggedUser.user.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const tasks = await response.json();
        setTaskList(tasks);
      }
    } catch (err) {}
  };

  return (
    <TodoContext.Provider
      value={{
        registerUser,
        message,
        login,
        loggedUser,
        setLoggedUser,
        insertTask,
        taskList,
        getTaskList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
