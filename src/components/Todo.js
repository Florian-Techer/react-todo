import React, {useState} from "react";
import TodoForm from './TodoForm.js';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



//représente 1 tâche ( ligne )
function Todo({todos, completeTodo, removeTodo, updateTodo}){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }
    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} placeholder="update todo" />
    }



    return todos.map((todo, index) => (
          <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index}>
              <div key={todo.id} onClick={()=>completeTodo(todo.id)} className="done"> 
                {todo.text}
              </div>
              <div className="icons">
                  <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon"/>
                  <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="delete-icon"/>
              </div>
          </div>  
        ))
    
}

export default Todo