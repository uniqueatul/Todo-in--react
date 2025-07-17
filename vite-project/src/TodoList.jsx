import React from 'react'
import { useState } from 'react'


function TodoList() {
    let  [Todos , setTodos ] = useState(["sample task"]);
    let [newTodo , setnewTodo] = useState("");
    let addNewTask = () =>{
      console.log("we have to add new task in todo");
    };
     
    let updateTodoValu = (Event) => {
      console.log(Event.target);

    }
  return (
    <div>
        <input placeholder='Add a task' type='text' value={newTodo}></input>
        <br />
        <button>Add Task</button>
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