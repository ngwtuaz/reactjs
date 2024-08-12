import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/todos/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTodo = async () => {
    if (title.trim() && description.trim()) {
      try {
        const res = await axios.put(`http://localhost:3000/todos/${id}`, { title, description });
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
      <button onClick={handleUpdateTodo}>Update Todo</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
};

export default EditTodo;
