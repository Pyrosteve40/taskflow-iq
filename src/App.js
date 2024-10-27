import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskManagerScreen from './components/TaskManagerScreen';
import IdeaToTaskScreen from './components/IdeaToTaskScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="top-bar">
          <Link to="/" className="nav-link">Task Manager</Link>
          <Link to="/idea-to-task" className="nav-link">Idea to Task</Link>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<TaskManagerScreen />} />
            <Route path="/idea-to-task" element={<IdeaToTaskScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
