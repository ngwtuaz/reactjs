import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:3000/todos');
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/todos?q=${search}`);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem 
              key={index} 
              todo={todo} 
              onDelete={handleDelete} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
