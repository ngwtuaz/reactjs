import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <Link to={`/edit/${todo.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
