// import './styles/index.scss'
import Grid from '@mui/material/Grid';
import ListPost from './components/list_post';
import PageAside from './components/side';
import { useReducer, useState, useRef, useEffect } from "react";
import { Provider } from 'react-redux'

import FormAdd from "./components/pages/form_add";
import ListTodo from "./components/pages/list_todo";

// //Todo List App
// let nextId = 0;

let initState = [
  {
    id: 1,
    taskName: "Học JS",
  },
  {
    id: 2,
    taskName: "Học CSS",
  },
  {
    id: 3,
    taskName: "Học HTML",
  },
];

function App() {
  // //Todo List App
  // const [name, setName] = useState('');
  // const [artists, setArtists] = useState([]);
  // const [editId, setEditId] = useState(null);
  // //Todo List App
  // const handleAddOrUpdate = () => {
  //   if (editId !== null) {
  //     setArtists(artists.map(artist =>
  //       artist.id === editId ? { ...artist, name: name } : artist
  //     ));
  //     setEditId(null);
  //   } else {
  //     setArtists([
  //       ...artists,
  //       { id: nextId++, name: name }
  //     ]);
  //   }
  //   setName('');
  // };

  //TODOOOOO
  const [todos, dispatch] = useReducer(todosReducer, initState)
  function todosReducer(todos, action) {
    switch (action.type) {
      case "add":
        let obj = { id: 12, taskName: action.payload, };
        return [...todos, obj];
      case "delete":
        return todos.filter((a) => a.id !== action.payload);
      default:
        return todos;
    }
  }
  function handleDelete(id) {
    dispatch({ type: "delete", payload: id, });
  }

  function handleClick(taskName) {
    dispatch({ type: "add", payload: taskName, });
  }

  // let [text, setText] = useState("");
  // let [count, setCount] = useState(0);
  // let timer = useRef(null);
  // let inputRef = useRef(null);
  // let data;

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => {
  //       data = json;
  //       console.log(data);
  //     });
  // }, []);

  // function handleClick() {
  //   timer.current = setInterval(() => {
  //     setCount((n) => n + 1);
  //   }, 1000);
  // }
  // function handleStop() {
  //   console.log(timer.current);
  //   clearInterval(timer.current);
  // }
  return (
    // <>
    //   <Grid container spacing={2}>
    //     <Grid item xs={8}>
    //       <ListPost />
    //     </Grid>
    //     <Grid item xs={4}>
    //       <PageAside />
    //     </Grid>
    //   </Grid>
    // </>
    //Todo List App
    // <>
    //   <h1>To-do List App</h1>
    //   <input
    //     value={name}
    //     onChange={e => setName(e.target.value)}
    //   />
    //   <button onClick={handleAddOrUpdate}>
    //     {editId !== null ? 'Update' : 'Add'}
    //   </button>
    //   <ul>
    //     {artists.map(artist => (
    //       <li key={artist.id}>
    //         {artist.name}{' '}
    //         <button onClick={() => {
    //           setEditId(artist.id);
    //           setName(artist.name);
    //         }}>
    //           Edit
    //         </button>
    //         <button onClick={() => {
    //           setArtists(artists.filter(a =>
    //             a.id !== artist.id
    //           ));
    //         }}>
    //           Delete
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </>

    //TODOOOOOO
    <>
      <h1>List TODO</h1>
      <div className="content">
        <FormAdd handleClick={handleClick} />
        <ListTodo handleDelete={handleDelete} todos={todos} />
      </div>
    </>

// demo useRef
    // <div>
    //   <h1>{count}</h1>
    //   <input ref={inputRef} type="text" />
    //   <button
    //     onClick={() => {
    //       inputRef.current.focus();
    //       console.log(inputRef.current.value);
    //     }}>
    //     Focus
    //   </button>
    //   <button onClick={handleClick}>Start</button>
    //   <button onClick={handleStop}>Stop</button>
    // </div>
  )
}

export default App;