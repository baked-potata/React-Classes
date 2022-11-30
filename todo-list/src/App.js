import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import TaskList from './pages/TaskList'
import CreateTask from './pages/CreateTask'
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/task-list' element={<TaskList />} />

          <Route path='/create-task' element={<CreateTask />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
