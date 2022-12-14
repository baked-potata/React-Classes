import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />}></Route>
            {/* using navigate replace to option to show login page */}

            <Route path="/" element={<Home />}>
              {/* adding child routes or login and register page */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/task-list" element={<TaskList />} />

            <Route path="/create-task" element={<CreateTask />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
