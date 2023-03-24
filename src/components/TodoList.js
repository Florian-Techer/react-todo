import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';


function TodoList(){
    const [todos, setTodos] = useState([])
    const [taskDone, setTaskDone] = useState(0)

    const addTodo = todo => {
        const newTodos = [...todos, todo];
        setTodos(newTodos)
    }
    
    useEffect(() => {
        setTaskDone(0)
        todos.map(todo => {
            if(todo.isComplete){
                setTaskDone(taskDone + 1)
            }
        })
    }, [todos])

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
                <h3>You have {todos.length - taskDone} task </h3>
                <TodoForm onSubmit={addTodo} placeholder="add todo" />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
             </div>
    
}

export default TodoList