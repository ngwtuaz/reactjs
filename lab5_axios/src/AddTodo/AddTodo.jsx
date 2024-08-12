import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = async () => {
    if (title.trim() && description.trim()) {
      try {
        const res = await axios.post('http://localhost:3000/todos', { title, description });
        console.log(res);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
