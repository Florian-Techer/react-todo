import React, {useState} from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';


function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        console.log(todo)
        const newTodos = [...todos, todo];
        console.log(newTodos)
        setTodos(newTodos)
        console.log(typeof todos)
    }
    

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArray = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArray);
    }


    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos);
    }
     return <div>
                <h1>What's the plan for today ?</h1>
                <TodoForm onSubmit={addTodo}/>
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
             </div>
    
}

export default TodoList