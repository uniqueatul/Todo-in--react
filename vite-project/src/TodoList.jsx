import React from 'react'
import { useState } from 'react'


function TodoList() {
    let  [Todos , setTodos ] = useState(["sample task"]);
    let [newTodo , setnewTodo] = useState("");


    let addNewTask = () =>{
      setTodos([...Todos, newTodo]);
      setnewTodo ("");



      
    };
     
    let updateTodoValu = (Event) => {
      setnewTodo(Event.target.value);

    }
  return (
    <div>
        <input placeholder='Add a task'  value={newTodo} 
        onChange={updateTodoValu}
        ></input>
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br />
        <br />
        <br />
        <hr />
        <h4>Tasks Todo</h4>

        <ul>

            {
                Todos.map((Todo) =>(

                     <li>{Todo}</li>
                ))  }
        </ul>

    </div>
  ) 
}

export default TodoList