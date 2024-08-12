import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import EditTodo from './EditTodo/EditTodo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Todo</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
