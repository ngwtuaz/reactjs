import { todoContext } from "./contexts/todo_context";
import { useContext } from "react";

function About() {
    let { datas, setTodos } = useContext(todoContext);
    console.log("todo context: ", datas);

    function updateTodo(){
        setTodos([])
    }

    return (
        <>
            <h1>About</h1>
            <button onClick={updateTodo}>Update Todos</button>
        </>
    );
}

export default About;