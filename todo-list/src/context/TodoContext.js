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

  const login = async (formData) => {
    const response = await fetch(
      `http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,
      { method: "GET" }
    );
    const user = await response.json();
    console.log(user);
    if (user.length > 0) {
      setMessage({ text: "Logged In", class: "alert alert-info mt-3" });
    } else {
      setMessage({
        text: "Check email/password",
        class: "alert alert-danger mt-3",
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        registerUser,
        message,
        login,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
